import "server-only";

const consumerSalesValue = process.env.CONSUMER_SALES_ENABLED?.trim().toLowerCase();

export const legalInfo = {
  publicationDirector: process.env.LEGAL_PUBLICATION_DIRECTOR?.trim() || null,
  hostName: process.env.LEGAL_HOST_NAME?.trim() || null,
  hostAddress: process.env.LEGAL_HOST_ADDRESS?.trim() || null,
  consumerSalesEnabled:
    consumerSalesValue === "true"
      ? true
      : consumerSalesValue === "false"
        ? false
        : null,
  mediatorName: process.env.CONSUMER_MEDIATOR_NAME?.trim() || null,
  mediatorUrl: process.env.CONSUMER_MEDIATOR_URL?.trim() || null,
} as const;

export const legalReadiness = {
  mentions:
    Boolean(legalInfo.publicationDirector) &&
    Boolean(legalInfo.hostName) &&
    Boolean(legalInfo.hostAddress),
  consumerTerms:
    legalInfo.consumerSalesEnabled === false ||
    (legalInfo.consumerSalesEnabled === true &&
      Boolean(legalInfo.mediatorName) &&
      Boolean(legalInfo.mediatorUrl)),
} as const;
