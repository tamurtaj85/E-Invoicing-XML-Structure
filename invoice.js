import utils from "./imports.js";
const {
  builder,
  CAC_TAGS,
  CBC_TAGS,
  ATT_KEY_LIST,
  ATT_VAL_LIST,
  addNodesToParent,
  addSubChildToChild,
} = utils;

import DOCUMENT_HEADER from "./modules/documentHeader.js";
import ADDITIONAL_DOCUMENT_REFERENCE from "./modules/additionalDocumnetRef.js";
import SIGNATURE from "./modules/signature.js";
import ACCOUNTING_PARTY from "./modules/accountingParty.js";
import DELIVERY from "./modules/delivery.js";
import PAYMENT_MEANS from "./modules/paymentMeans.js";
import TAX_SCHEME from "./modules/taxScheme.js";
import TAX_TOTAL from "./modules/taxTotal.js";
import TAX_CATEGORY from "./modules/taxCategory.js";
import LEGAL_MONETARY_TOTAL from "./modules/legalMonetaryTotal.js";
import INVOICE_LINE from "./modules/invoiceLine.js";

// // // // // // // // // // // // // //
// Creating parent node
// // // // // // // // // // // // // //
const Invoice = builder.create("Invoice");

// // // // // // // // // // // // // //
// Adding child node into parent
// // // // // // // // // // // // // //

// Setting DOCUMENT_HEADER
addNodesToParent(Invoice, DOCUMENT_HEADER.setProfileID());
addNodesToParent(Invoice, DOCUMENT_HEADER.setID());
addNodesToParent(Invoice, DOCUMENT_HEADER.setUUID());
addNodesToParent(Invoice, DOCUMENT_HEADER.setIssueDate());
addNodesToParent(Invoice, DOCUMENT_HEADER.setIssueTime());
addNodesToParent(Invoice, DOCUMENT_HEADER.setInvoiceTypeCode());
addNodesToParent(Invoice, DOCUMENT_HEADER.setDocumentCurrencyCode());
addNodesToParent(Invoice, DOCUMENT_HEADER.setTaxCurrencyCode());
addNodesToParent(Invoice, DOCUMENT_HEADER.setLineCountNumeric());

const ADR_DATA = [
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

// Setting ADDITIONAL_DOCUMENT_REFERENCE
for (let i = 0; i < 3; i++)
  addNodesToParent(
    Invoice,
    ADDITIONAL_DOCUMENT_REFERENCE.setADR(...ADR_DATA[i])
  );

//  Setting SIGNATURE
addNodesToParent(
  Invoice,
  SIGNATURE.setSignature(
    "urn:oasis:names:specification:ubl:signature:Invoice",
    "urn:oasis:names:specification:ubl:dsig:enveloped:xades"
  )
);

const postalAddress = {
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

// Setting ACCOUNTING_PARTY (Supplier)
const asp = ACCOUNTING_PARTY.setAccountingParty(
  CAC_TAGS.ACCOUNTING_SUPPLIER_PARTY
);

addNodesToParent(asp, ACCOUNTING_PARTY.setPartyID(ATT_VAL_LIST.MLS, 123457890));
addNodesToParent(asp, ACCOUNTING_PARTY.setPostalAddress(postalAddress.asp_PA));
// let pts = ACCOUNTING_PARTY.setPartTaxScheme(310175397400003);
// addNodesToParent(asp, pts);
// addNodesToParent(pts, TAX_SCHEME(ATT_VAL_LIST.VAT));
addNodesToParent(
  asp,
  addSubChildToChild(
    ACCOUNTING_PARTY.setPartTaxScheme(310175397400003),
    TAX_SCHEME(ATT_VAL_LIST.VAT)
  )
);
addNodesToParent(
  asp,
  ACCOUNTING_PARTY.setPartyLegalEntity("AL Salam Suppliers Co. LTD")
);
addNodesToParent(Invoice, asp);

// Setting ACCOUNTING_PARTY (Customer)
const acp = ACCOUNTING_PARTY.setAccountingParty(
  CAC_TAGS.ACCOUNTING_CUSTOMER_PARTY
);

addNodesToParent(
  acp,
  ACCOUNTING_PARTY.setPartyID(ATT_VAL_LIST.SAG, "123C12345678")
);
addNodesToParent(acp, ACCOUNTING_PARTY.setPostalAddress(postalAddress.acp_PA));
addNodesToParent(
  acp,
  addSubChildToChild(
    ACCOUNTING_PARTY.setPartTaxScheme(),
    TAX_SCHEME(ATT_VAL_LIST.VAT)
  )
);
addNodesToParent(
  acp,
  ACCOUNTING_PARTY.setPartyLegalEntity("AL KAWTHAR MARKETS")
);
addNodesToParent(Invoice, acp);

// Setting DELIVERY
addNodesToParent(Invoice, DELIVERY.setDelivery("2022-04-25"));

// Setting PAYMENT_MEANS
addNodesToParent(Invoice, PAYMENT_MEANS.setPaymentMeans(42));

// Setting TAX_TOTAL => TAX_SUBTOTAL
const ttP = TAX_TOTAL.setTaxTotal(ATT_VAL_LIST.SAR, 135.0);
addNodesToParent(
  ttP,
  addSubChildToChild(
    TAX_TOTAL.setSubTotal(
      { currencyCode: ATT_VAL_LIST.SAR, amount: 900.0 },
      { currencyCode: ATT_VAL_LIST.SAR, amount: 135.0 }
    ),
    addSubChildToChild(
      TAX_CATEGORY(CAC_TAGS.TAX_CATEGORY, "S", 15),
      TAX_SCHEME(ATT_VAL_LIST.VAT)
    )
  )
);
addNodesToParent(Invoice, ttP);

// Setting TAX_TOTAL
addNodesToParent(Invoice, TAX_TOTAL.setTaxTotal(ATT_VAL_LIST.SAR, 135.0));

// Setting LEGAL_MONETARY_TOTAL
const lmt = LEGAL_MONETARY_TOTAL.setLegalMonetaryTotal();
const currencyCode = ATT_VAL_LIST.SAR;

addNodesToParent(
  lmt,
  LEGAL_MONETARY_TOTAL.setLineExtensionAmount(currencyCode, 900.0)
);

addNodesToParent(
  lmt,
  LEGAL_MONETARY_TOTAL.setTaxExclusiveAmount(currencyCode, 900.0)
);

addNodesToParent(
  lmt,
  LEGAL_MONETARY_TOTAL.setTaxInclusiveAmount(currencyCode, 1035.0)
);

addNodesToParent(
  lmt,
  LEGAL_MONETARY_TOTAL.setAllowanceTotalAmount(currencyCode, 0.0)
);

addNodesToParent(
  lmt,
  LEGAL_MONETARY_TOTAL.setPayableAmount(currencyCode, 1035.0)
);

addNodesToParent(Invoice, lmt);

// Setting INVOICE_LINE
addInvoiceLine();
addInvoiceLine();

const fullInvoice = Invoice.end({ pretty: true });

// // // // // // // // // // // // // //
// Helper function
// // // // // // // // // // // // // //
function addInvoiceLine() {
  const invoiceLine = INVOICE_LINE.setInvoiceLine(1, {
    unitCode: ATT_VAL_LIST.PEC,
    value: 1,
  });

  addNodesToParent(
    invoiceLine,
    LEGAL_MONETARY_TOTAL.setLineExtensionAmount(currencyCode, 200.0)
  );

  addNodesToParent(
    invoiceLine,
    addSubChildToChild(
      TAX_TOTAL.setTaxTotal(currencyCode, 30.0),
      INVOICE_LINE.setRoundingAmount(currencyCode, 230.0)
    )
  );

  addNodesToParent(
    invoiceLine,
    addSubChildToChild(
      INVOICE_LINE.setItem(`Item ${1}`),
      addSubChildToChild(
        TAX_CATEGORY(CAC_TAGS.CLASSIFIED_TAX_CATEGORY, "S", 15),
        TAX_SCHEME(ATT_VAL_LIST.VAT)
      )
    )
  );

  addNodesToParent(invoiceLine, INVOICE_LINE.setPrice(currencyCode, 200.0));

  addNodesToParent(Invoice, invoiceLine);
}

// function addMultipleChilds(childNode, childCount) {
//   let node = "";

//   for (let i = 0; i < childCount; i++) {
//     node = builder.create(childNode);
//     addNodesToParent(Invoice, node);
//   }
// }

console.log(fullInvoice);
