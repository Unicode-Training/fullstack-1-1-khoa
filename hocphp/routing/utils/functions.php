<?php
$paramsData = [];
function getParams($key = null)
{
    global $paramsData;
    return $key ? $paramsData[$key] : $paramsData;
}
