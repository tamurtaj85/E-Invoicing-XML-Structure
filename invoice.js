import utils from "./imports.js";
const {
  builder,
  CAC_TAGS,
  CBC_TAGS,
  ATT_KEY_LIST,
  ATT_VAL_LIST,
  xmlnsTG,
  addNodesToParent,
  addSubChildToChild,
} = utils;

import fs from "fs";

import { UBL_EXTENSION_COMPONENT } from "./modules/extentions.js";
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

import {
  DS_UBL_EXT_COMPONENT,
  ADR_DATA,
  postalAddress,
} from "./invoiceData.js";

// // // // // // // // // // // // // //
// Creating parent node
// // // // // // // // // // // // // //
const Invoice = builder
  .create("Invoice")
  .att(
    ATT_KEY_LIST.XMLNS,
    "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
  )
  .att(
    xmlnsTG("cac"),
    "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
  )
  .att(
    xmlnsTG("cbc"),
    "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
  )
  .att(
    xmlnsTG("ext"),
    "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
  );

// // // // // // // // // // // // // //
// Adding child node into parent
// // // // // // // // // // // // // //

addNodesToParent(Invoice, UBL_EXTENSION_COMPONENT({ ...DS_UBL_EXT_COMPONENT }));

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

// Setting ACCOUNTING_PARTY (Supplier)
const asp = ACCOUNTING_PARTY.setAccountingParty(
  CAC_TAGS.ACCOUNTING_SUPPLIER_PARTY
);

addNodesToParent(asp, ACCOUNTING_PARTY.setPartyID(ATT_VAL_LIST.MLS, 123457890));
addNodesToParent(asp, ACCOUNTING_PARTY.setPostalAddress(postalAddress.asp_PA));
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

fs.writeFile(
  "./TestStructures/tax_invoice_test3.xml",
  fullInvoice,
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("The file was saved!");
    }
  }
);

console.log(fullInvoice);
