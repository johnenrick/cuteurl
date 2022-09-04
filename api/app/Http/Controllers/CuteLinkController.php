<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CuteLinkController extends APIController
{
    private $idLength = 6; // the length of id in the code
    private $codeLength = 8; // the total length of the code. Random code + id
    public function generateCutifiedLink(Request $request){
        $validator = Validator::make($request->all(), [
            'url' => 'required||min:10|max:255' // cannot use unique validation because url is varchar
        ]);
        if ($validator->fails()) {
            $this->setResponseErrors(1000, $validator->errors());
        }else{
            $url = $request->input('url');
            $cuteLinks = (new \App\Models\CuteLink())->where('url_hash', getUrlHash($url))->get()->toArray();
            $generatedCuteLink = null;
            foreach($cuteLinks as $cuteLink){
                if($cuteLink['url'] == $url){
                    $generatedCuteLink = $cuteLink;
                    break;
                }
            }
            if($generatedCuteLink == null){
                $cuteLinkModel = new \App\Models\CuteLink();
                $cuteLinkModel->random_code = decimalToBase64Text(rand(62, 3843));
                $cuteLinkModel->url = $url;
                $cuteLinkModel->url_hash = getUrlHash($url);
                if($cuteLinkModel->save()){
                    $generatedCuteLink = $cuteLinkModel->toArray();
                }
            }
            if($generatedCuteLink){
                $generatedCuteLink['cutified_link'] = $this->getCutifiedLink($generatedCuteLink);
                $this->setResponseResult($generatedCuteLink);
            }else{
                $this->setResponseErrors(1, 'Failed to generate cutified link');
            }
        }
        return $this->outputResponse();
    }
    public function redirect(Request $request, $code){
        $validator = Validator::make(['code' => $code], [
            'code' => 'alpha_num|size:8'
        ]);
        $invalidLink = 'localhost:4200/invalid-link';
        if ($validator->fails()) {
            echo 'failed';
        }else{
            $cuteLinkId = substr($code, 2, $this->idLength);
            $randomCode = substr($code, 0, 2);
            $cuteLink = (new \App\Models\CuteLink())->where('id', $cuteLinkId)->where('random_code', $randomCode)->get()->toArray();
            if(count($cuteLink)){
                $cuteLink = $cuteLink[0];
                return redirect($cuteLink['url']);
            }
        }
    }
    private function getCutifiedLink($cuteLink){
        return url($cuteLink['random_code'] . str_pad(decimalToBase64Text($cuteLink['id']), $this->idLength, '0', STR_PAD_LEFT ));
    }
}
