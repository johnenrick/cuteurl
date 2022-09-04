<?php

function decimalToBase64Text($number) { // code from stackoverflow. base_convert is only limited to base 36
  $codeset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  $base = strlen($codeset);
  $converted = "";
  while ($number > 0) {
    $converted = substr($codeset, ($number % $base), 1) . $converted;
    $number = floor($number/$base);
  }
  return $converted;
}
function base64TextToDecimal($base64Text) { // code from stackoverflow. base_convert is only limited to base 36
  $codeset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  $base = strlen($codeset);
  $c = 0;
  for ($i = strlen($base64Text); $i; $i--) {
    $c += strpos($codeset, substr($base64Text, (-1 * ( $i - strlen($base64Text) )),1)) 
          * pow($base,$i-1);
  }
  return $c;
}
/* Encapsulate the hashing algo of the url */
function getUrlHash($url){
  return md5($url);
}