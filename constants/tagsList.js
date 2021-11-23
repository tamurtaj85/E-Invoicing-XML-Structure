// Tag generators (TG)
const cacTG = (tagName) => `cac:${tagName}`;
const cbcTG = (tagName) => `cbc:${tagName}`;
const extTG = (tagName) => `ext:${tagName}`;
const sigTG = (tagName) => `sig:${tagName}`;
const sacTG = (tagName) => `sac:${tagName}`;
const sbcTG = (tagName) => `sbc:${tagName}`;
const dsTG = (tagName) => `ds:${tagName}`;
const xadesTG = (tagName) => `xades:${tagName}`;

// cac Tags
export const CAC_TAGS = {
  ITEM: cacTG("Item"),
  PRICE: cacTG("Price"),
  PARTY: cacTG("Party"),
  COUNTRY: cacTG("Country"),
  PARTY_ID: cacTG("PartyIdentification"),
  DELIVERY: cacTG("Delivery"),
  TAX_TOTAL: cacTG("TaxTotal"),
  SIGNATURE: cacTG("Signature"),
  TAX_SCHEME: cacTG("TaxScheme"),
  ATTACHMENT: cacTG("Attachment"),
  TAX_SUBTOTAL: cacTG("TaxSubtotal"),
  TAX_CATEGORY: cacTG("TaxCategory"),
  INVOICE_LINE: cacTG("InvoiceLine"),
  PAYMENT_MEANS: cacTG("PaymentMeans"),
  POSTAL_ADDRESS: cacTG("PostalAddress"),
  PARTY_TAX_SCHEME: cacTG("PartyTaxScheme"),
  PARTY_LEGAL_ENTITY: cacTG("PartyLegalEntity"),
  LEGAL_MONETARY_TOTAL: cacTG("LegalMonetaryTotal"),
  CLASSIFIED_TAX_CATEGORY: cacTG("ClassifiedTaxCategory"),
  ACCOUNTING_CUSTOMER_PARTY: cacTG("AccountingCustomerParty"),
  ACCOUNTING_SUPPLIER_PARTY: cacTG("AccountingSupplierParty"),
  ADDITIONAL_DOCUMENT_REFERENCE: cacTG("AdditionalDocumentReference"),
};

// cbc Tags
export const CBC_TAGS = {
  ID: cbcTG("ID"),
  UUID: cbcTG("UUID"),
  NAME: cbcTG("Name"),
  PERCENT: cbcTG("Percent"),
  ID_CODE: cbcTG("IdentificationCode"),
  PLOT_ID: cbcTG("PlotIdentification"),
  REG_NAME: cbcTG("RegistrationName"),
  CITY_NAME: cbcTG("CityName"),
  COMPANY_ID: cbcTG("CompanyID"),
  PROFILE_ID: cbcTG("ProfileID"),
  ISSUE_DATE: cbcTG("IssueDate"),
  ISSUE_TIME: cbcTG("IssueTime"),
  TAX_AMOUNT: cbcTG("TaxAmount"),
  EDB_OBJECT: cbcTG("EmbeddedDocumentBinaryObject"),
  POSTAL_ZONE: cbcTG("PostalZone"),
  STREET_NAME: cbcTG("StreetName"),
  PRICE_AMOUNT: cbcTG("PriceAmount"),
  TAXABLE_AMOUNT: cbcTG("TaxableAmount"),
  TAX_EXC_AMOUNT: cbcTG("TaxExclusiveAmount"),
  TAX_INC_AMOUNT: cbcTG("TaxInclusiveAmount"),
  PAYABLE_AMOUNT: cbcTG("PayableAmount"),
  BUILDING_NUMBER: cbcTG("BuildingNumber"),
  ROUNDING_AMOUNT: cbcTG("RoundingAmount"),
  LINE_EXT_AMOUNT: cbcTG("LineExtensionAmount"),
  SIGNATURE_METHOD: cbcTG("SignatureMethod"),
  INVOICE_TYPE_CODE: cbcTG("InvoiceTypeCode"),
  DOC_CURRENCY_CODE: cbcTG("DocumentCurrencyCode"),
  TAX_CURRENCY_CODE: cbcTG("TaxCurrencyCode"),
  INVOICED_QUANTITY: cbcTG("InvoicedQuantity"),
  CITY_SUB_DIV_NAME: cbcTG("CitySubdivisionName"),
  PAYMENT_MEANS_CODE: cbcTG("PaymentMeansCode"),
  COUNTRY_SUB_ENTITY: cbcTG("CountrySubentity"),
  LINE_COUNT_NUMERIC: cbcTG("LineCountNumeric"),
  ACTUAL_DELIVERY_DATE: cbcTG("ActualDeliveryDate"),
  ALLOWANCE_TOTAL_AMOUNT: cbcTG("AllowanceTotalAmount"),
};

// EXT Tags
export const EXT_TAGS = {
  UBL_EXTENSIONS: extTG("UBLExtensions"),
  UBL_EXTENSION: extTG("UBLExtension"),
  EXTENSION_URI: extTG("ExtensionURI"),
  EXTENSION_CONTENT: extTG("ExtensionContent"),
};

// UNI Tags
export const SIG_TAG = {
  UBL_DOC_SIG: sigTG("UBLDocumentSignatures"),
};

export const SAC_TAG = {
  SIGNATURE_INFO: sacTG("SignatureInformation"),
};

export const SBC_TAG = {
  REF_SIGNATURE_ID: sbcTG("ReferencedSignatureID"),
};

// DS Tags
export const DS_TAGS = {
  X_PATH: dsTG("XPath"),
  OBJECT: dsTG("Object"),
  KEY_INFO: dsTG("KeyInfo"),
  REFERENCE: dsTG("Reference"),
  SIGNATURE: dsTG("Signature"),
  TRANSFORM: dsTG("Transform"),
  X590_DATA: dsTG("X509Data"),
  TRANSFORMS: dsTG("Transforms"),
  SIGNED_INFO: dsTG("SignedInfo"),
  DIGEST_VALUE: dsTG("DigestValue"),
  DIGEST_METHOD: dsTG("DigestMethod"),
  SIGNATURE_VALUE: dsTG("SignatureValue"),
  SIGNATURE_METHOD: dsTG("SignatureMethod"),
  X509_CERTIFICATE: dsTG("X509Certificate"),
  X509_ISSUER_NAME: dsTG("X509IssuerName"),
  X509_SERIAL_NUMBER: dsTG("X509SerialNumber"),
  CANONICALIZATION_METHOD: dsTG("CanonicalizationMethod"),
};

// XADES Tags
export const XADES_TAGS = {
  QUALIFYING_PROPERTIES: xadesTG("QualifyingProperties"),
  SIGNED_PROPERTIES: xadesTG("SignedProperties"),
  SIGNED_SIGNATURE_PROPS: xadesTG("SignedSignatureProperties"),
  SIGNING_TIME: xadesTG("SigningTime"),
  SIGNING_CERTIFICATRE: xadesTG("SigningCertificate"),
  CRET: xadesTG("Cert"),
  CRET_DIGEST: xadesTG("CertDigest"),
  ISSUER_SERIAL: xadesTG("IssuerSerial"),
};
