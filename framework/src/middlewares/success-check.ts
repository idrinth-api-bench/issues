/*
Below Document Defines the standards upon which most apis will be constructed

1)JSON API - http://jsonapi.org/.
A document MUST contain at least one of the following top-level members:
{
  "data":{},
  "errors":[],
  "meta":{}
}

data: the document’s “primary data”.
errors: an array of error objects.
meta: a meta object that contains non-standard meta-information.
a member defined by an applied extension.

2) JSEND - https://github.com/omniti-labs/jsend
{
  "status": "success/fail/error",
  "data":{},
  "message":"Present only when status is error"
}

3) Another Common Format
{
  "success": false/true,
  "message": "Used mostly in case of error message,
  "error_code": 1308,
  "data": {}
}
*/
