<?php
namespace App\Http\Controllers;

class APIController extends Controller {
  private $response = [
      'result' => null,
      'error' => [
        'code' => 0, // 1000 - form validation
        'message' => null
      ] 
  ];
  private $responseStatus = 200;
  public function setResponseStatus($statusCode){
    $this->responseStatus = $statusCode;
  }
  public function setResponseResult($result){
    $this->response['result'] = $result;
  }
  public function setResponseErrors($code, $message){
    $this->response['error'] = [
      'code' => $code,
      'message' => $message
    ];
  }
  public function outputResponse(){
    return response()->json($this->response, $this->responseStatus);
  }
}