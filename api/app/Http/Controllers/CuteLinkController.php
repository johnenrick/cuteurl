<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CuteLinkController extends APIController
{
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
    private function getCutifiedLink($cuteLink){
        return $cuteLink['random_code'] . str_pad(decimalToBase64Text($cuteLink['id']), 5, '0', STR_PAD_LEFT );
    }

    
}
