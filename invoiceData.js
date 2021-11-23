import utils from "./imports.js";
const { builder, CAC_TAGS, CBC_TAGS, ATT_KEY_LIST, ATT_VAL_LIST, xmlnsTG } =
  utils;

// UBL Extention Component Data
export const DS_UBL_EXT_COMPONENT = {
  URI: "urn:oasis:names:specification:ubl:dsig:enveloped:xades",
  UBL_DOC_SIGNATURES: {
    SAC_SIGNATURE:
      "urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2",
    SBC_SIGNATURE:
      "urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2",
    SIG_SIGNATURE:
      "urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2",
  },
  SIGNATURE_INFO: {
    SIGNATURE_ID: "urn:oasis:names:specification:ubl:signature:1",
    REF_SIGNATURE_ID:
      "urn:oasis:names:specification:ubl:signature:Invoicesadas",
  },
  SIGNATURE: {
    SIGNATURE_REF: "http://www.w3.org/2000/09/xmldsig#",
    ID_TYPE: "signature",
  },
  ALGO_REF: {
    CM: "http://www.w3.org/2006/12/xml-c14n11",
    SM: "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256",
  },
  REFERENCE: [
    {
      REF: {
        ATT_TYPE: ATT_KEY_LIST.ID,
        ATT_VALUE: "invoiceSignedData",
        URI: "",
      },
      DIGEST: {
        ALGO_REF: "http://www.w3.org/2001/04/xmlenc#sha256",
        VALUE:
          "24032ad69f6be690a302d02846f7ad29070a3c86cf2d3d872977b4b8a1d49e25",
      },
      TRANSFORM: [
        {
          ALGO_REF: "http://www.w3.org/TR/1999/REC-xpath-19991116",
          X_PATH: "not(//ancestor-or-self::ext:UBLExtensions)",
        },
        {
          ALGO_REF: "http://www.w3.org/TR/1999/REC-xpath-19991116",
          X_PATH: "not(//ancestor-or-self::cac:Signature)",
        },
        {
          ALGO_REF: "http://www.w3.org/TR/1999/REC-xpath-19991116",
          X_PATH:
            "not(//ancestor-or-self::cac:AdditionalDocumentReference[cbc:ID='QR'])",
        },
        {
          ALGO_REF: "http://www.w3.org/2006/12/xml-c14n11",
          X_PATH: "",
        },
      ],
    },
    {
      REF: {
        ATT_TYPE: ATT_KEY_LIST.TYPE,
        ATT_VALUE: "http://www.w3.org/2000/09/xmldsig#SignatureProperties",
        URI: "#xadesSignedProperties",
      },
      DIGEST: {
        ALGO_REF: "http://www.w3.org/2001/04/xmlenc#sha256",
        VALUE:
          "2ab365b063238318fdeac9c2957b135ef8a6727691fc4d81982b5bdd2cec9792",
      },
      TRANSFORM: null,
    },
  ],
  SIGNATURE_VALUE:
    "MEUCIF/rcZ3HlUYNIXje9NUK5GOz88ot98CCXzDsR/R2BjurAiEApvaCBC71VmhbM4wltnNrY2pHeL/8owu28ZouMWKDww4=",
  KEY_INFO_VALUE:
    "MIIBmzCCAUECCQDQROomkk8YkDAKBggqhkjOPQQDAjBWMQswCQYDVQQGEwJQTDEQMA4GA1UECAwHU2lsZXNpYTERMA8GA1UEBwwIS2F0b3dpY2UxDTALBgNVBAoMBEdBWlQxEzARBgNVBAMMCkNvbW1vbk5hbWUwIBcNMjEwOTA2MTgwOTA1WhgPNDQ4NTEwMTgxODA5MDVaMFYxCzAJBgNVBAYTAlBMMRAwDgYDVQQIDAdTaWxlc2lhMREwDwYDVQQHDAhLYXRvd2ljZTENMAsGA1UECgwER0FaVDETMBEGA1UEAwwKQ29tbW9uTmFtZTBWMBAGByqGSM49AgEGBSuBBAAKA0IABJboxJQD/AlFyPQCWM3S2ekwGnkhKpOnyP+tjsLYFcJfLLTdX+U/uOfQtKAm/KRXI1E9d8DjOOkVFo5Q1ZQE25QwCgYIKoZIzj0EAwIDSAAwRQIhANULHFfKoroAMgdoUQJ/UwjhD3xHgMeAXjgVpZftENoYAiB7WFgx0hLuJTJbLpYCzpzdpWVOXrIr8g4XvtWKl02j1w==",
  QUALIFYING_PROPERTIES: {
    REF: "http://uri.etsi.org/01903/v1.3.2#",
    TARGET: "signature",
  },
  SIGNED_PROPS_ID_TYPE: "xadesSignedProperties",
  SIGNING_DATETIME: "2021-02-25T12:57:51Z",
  CRET_DIGEST: {
    ALGO_REF: "http://www.w3.org/2001/04/xmlenc#sha256",
    VALUE: "9ef6c0b90ae609868bb614772e1d5375464ed1a1793ded751feb1e3414980f7c",
  },
  ISSUER: {
    NAME: "CN=CommonName,O=GAZT,L=Katowice,ST=Silesia,C=PL",
    SERIAL_NUMBER: "15007377309689649296",
  },
};

// console.log(DS_UBL_EXT_COMPONENT.REFERENCE);

// Additional Document Reference Data
export const ADR_DATA = [
  [
    ATT_VAL_LIST.ICV,
    {
      docType: "UUID",
      docValue: 46531,
    },
  ],
  [
    ATT_VAL_LIST.PIH,
    {
      docType: "Attachment",
      docValue:
        "NWZlY2ViNjZmZmM4NmYzOGQ5NTI3ODZjNmQ2OTZjNzljMmRiYzIzOWRkNGU5MWI0NjcyOWQ3M2EyN2ZiNTdlOQ==",
    },
  ],
  [
    ATT_VAL_LIST.QR,
    {
      docType: "Attachment",
      docValue:
        "ARlBbCBTYWxhbSBTdXBwbGllcyBDby4gTFREAg8zMTAxNzUzOTc0MDAwMDMDFDIwMjEtMDQtMjVUMTU6MzA6MDBaBAcxMDM1LjAwBQYxMzUuMDAGLGo0K3dET2FSTFJRbjdvd2VvQ2JvYjFXRGFxUFJDVEh6b25uMDhiK2RKcjA9B4GwMzA1NjMwMTAwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA1MmI4MTA0MDAwYTAzNDIwMDA0OTZlOGM0OTQwM2ZjMDk0NWM4ZjQwMjU4Y2RkMmQ5ZTkzMDFhNzkyMTJhOTNhN2M4ZmZhZDhlYzJkODE1YzI1ZjJjYjRkZDVmZTUzZmI4ZTdkMGI0YTAyNmZjYTQ1NzIzNTEzZDc3YzBlMzM4ZTkxNTE2OGU1MGQ1OTQwNGRiOTQIILDmL87RImpgalwSxEN7DVidfKQS9ffWYI5GIc7GyJdrCSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    },
  ],
];

// Postal Address
export const postalAddress = {
  asp_PA: {
    streetName: "King Abdulaziz Road",
    buildingNumber: 8228,
    plotID: 2121,
    citySubDivName: "Al Amal",
    cityName: "Riyadh",
    postalZone: 12643,
    countrySubEntity: "Riyadh Region",
    countryIdCode: "SA",
  },
  acp_PA: {
    streetName: "King Abdullah Road",
    buildingNumber: 3709,
    plotID: 1004,
    citySubDivName: "Al Mursalat",
    cityName: "Riyadh",
    postalZone: 11564,
    countrySubEntity: "Riyadh Region",
    countryIdCode: "SA",
  },
};
