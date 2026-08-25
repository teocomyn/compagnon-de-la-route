import "server-only";

export const legalInfo = {
  publicationDirector: process.env.LEGAL_PUBLICATION_DIRECTOR?.trim() || null,
  hostName: process.env.LEGAL_HOST_NAME?.trim() || null,
  hostAddress: process.env.LEGAL_HOST_ADDRESS?.trim() || null,
  mediatorName: process.env.CONSUMER_MEDIATOR_NAME?.trim() || null,
  mediatorUrl: process.env.CONSUMER_MEDIATOR_URL?.trim() || null,
} as const;

export const legalReadiness = {
  mentions:
    Boolean(legalInfo.publicationDirector) &&
    Boolean(legalInfo.hostName) &&
    Boolean(legalInfo.hostAddress),
  consumerTerms: Boolean(legalInfo.mediatorName) && Boolean(legalInfo.mediatorUrl),
} as const;
