import type { VerifiedGuide } from "@/lib/verified-guides";

const reviewedAt = "26 août 2026";
const reviewedAtIso = "2026-08-26";
const nextReviewAt = "26 février 2027";

export const seoClusterGuides = {
  permitExam: {
    slug: "examen-permis-d-conditions-epreuves",
    eyebrow: "Permis D · examen",
    title: "Examen du permis D : conditions, dossier et épreuves",
    description:
      "Permis préalable, âge, visite médicale, inscription ANTS, code, plateau et circulation : préparer chaque étape de l’examen du permis D.",
    summary: [
      "Le permis B et un contrôle médical réalisé par un médecin agréé sont requis avant les épreuves.",
      "L’âge minimal est en principe de 24 ans, avec des exceptions liées à certaines formations professionnelles de conducteur.",
      "L’examen pratique comprend une épreuve hors circulation puis une épreuve en circulation, avec des critères distincts.",
    ],
    sections: [
      {
        title: "À qui s’adresse cette page ?",
        paragraphs: [
          "Ce guide répond à une intention précise : préparer l’inscription et les épreuves du permis D. Pour comprendre les véhicules autorisés, la durée de validité de la catégorie et son articulation avec la qualification professionnelle, consultez plutôt le guide général consacré au permis D.",
          "Le permis D concerne les véhicules affectés au transport de personnes comportant plus de neuf places assises, conducteur compris. Une remorque dont le PTAC ne dépasse pas 750 kg peut y être attelée ; au-delà, la catégorie DE doit être examinée.",
        ],
      },
      {
        title: "Les conditions à contrôler avant l’inscription",
        bullets: [
          "Détenir un permis B en cours de validité.",
          "Avoir au moins 24 ans en règle générale, sauf exception liée à une formation professionnelle de conducteur reconnue.",
          "Effectuer le contrôle médical auprès d’un médecin agréé avant les épreuves.",
          "Être en règle avec les conditions de résidence, de séjour et, selon l’âge, de journée défense et citoyenneté.",
          "Vérifier si l’épreuve théorique générale doit être repassée ou si une dispense de moins de cinq ans s’applique.",
        ],
      },
      {
        title: "Le dossier ANTS et le numéro NEPH",
        paragraphs: [
          "L’inscription peut être réalisée par le centre de formation ou directement par le candidat. Dans les deux cas, le compte créé au nom du candidat doit être activé par celui-ci. L’attestation d’inscription au permis de conduire contient le numéro d’enregistrement préfectoral harmonisé, ou NEPH.",
          "Les pièces listées par Service Public comprennent notamment un justificatif d’identité, un justificatif de domicile, une photo-signature numérique, l’avis médical et le permis B. Des justificatifs supplémentaires peuvent être demandés selon l’âge, la nationalité ou la voie professionnelle invoquée.",
        ],
      },
      {
        title: "L’épreuve hors circulation",
        paragraphs: [
          "L’épreuve hors circulation vérifie les connaissances de réglementation des transports, de sécurité et de mécanique. Elle comprend des interrogations, des vérifications courantes de sécurité et un exercice de maniabilité.",
          "Service Public indique qu’il faut obtenir plus de seize points, éviter toute note éliminatoire et réussir la maniabilité. Le bénéfice de cette épreuve est conservé pour trois présentations en circulation pendant un an au maximum, sous réserve de validité de l’épreuve théorique.",
        ],
      },
      {
        title: "L’épreuve en circulation",
        paragraphs: [
          "L’épreuve en circulation contrôle l’installation, la sécurité à bord, la prise d’information, l’adaptation de l’allure, l’application de la réglementation, la communication avec les autres usagers et le maintien des espaces de sécurité.",
          "La réussite exige au moins dix-sept points et aucune erreur éliminatoire. Après un résultat favorable, le certificat d’examen du permis de conduire accompagné d’une pièce d’identité permet de conduire en France pendant quatre mois, le temps de demander le titre intégrant la nouvelle catégorie.",
        ],
      },
      {
        title: "La check-list avant chaque étape",
        bullets: [
          "Contrôler la validité du code, du NEPH et de l’avis médical.",
          "Relire le contrat de formation, le calendrier et les conditions de présentation aux examens.",
          "Conserver les justificatifs transmis et les convocations.",
          "Demander ce qui se passe en cas d’absence, d’échec ou de report d’épreuve.",
          "Ne pas confondre réussite au permis D et qualification complète pour conduire professionnellement.",
        ],
      },
    ],
    notice:
      "Les modalités administratives peuvent évoluer. Le centre doit confirmer par écrit les pièces, le calendrier et les conditions de représentation applicables à votre dossier.",
    sources: [
      {
        label: "Service Public : permis D",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2844",
        detail: "Conditions, inscription, code, épreuves pratiques, résultat et validité.",
      },
      {
        label: "Service Public : contrôle médical professionnel",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1255",
        detail: "Médecin agréé, avis médical et renouvellement des catégories professionnelles.",
      },
      {
        label: "France Titres : permis de conduire",
        url: "https://permisdeconduire.ants.gouv.fr/",
        detail: "Démarches d’inscription et de fabrication du titre.",
      },
    ],
    relatedLinks: [
      {
        href: "/permis-d-conducteur-professionnel",
        label: "Comprendre le permis D",
        description: "Véhicules, validité et articulation avec la qualification professionnelle.",
      },
      {
        href: "/fimo-passage-a-la-route",
        label: "Permis D, FIMO et FCO",
        description: "Distinguer le droit de conduire et la qualification métier.",
      },
      {
        href: "/devenir-conducteur-de-voyageurs",
        label: "Devenir conducteur de voyageurs",
        description: "Replacer l’examen dans le parcours professionnel complet.",
      },
    ],
    faqs: [
      {
        question: "Le permis B est-il obligatoire pour passer le permis D ?",
        answer: "Oui. Service Public indique que le permis B est la catégorie préalable nécessaire pour s’inscrire au permis D.",
      },
      {
        question: "Faut-il repasser le code pour le permis D ?",
        answer: "Cela dépend de la date de votre dernière réussite au code ou de la dernière catégorie de permis obtenue. Une dispense peut notamment s’appliquer lorsque ce délai ne dépasse pas cinq ans.",
      },
      {
        question: "La visite chez le médecin traitant suffit-elle ?",
        answer: "Non. Le contrôle médical doit être effectué auprès d’un médecin agréé pour le permis de conduire professionnel.",
      },
    ],
    reviewedAt,
    reviewedAtIso,
    nextReviewAt,
  },
  fcoRenewal: {
    slug: "fco-voyageurs-renouvellement",
    eyebrow: "FCO voyageurs",
    title: "FCO voyageurs : renouveler sa qualification de conducteur",
    description:
      "Échéance, durée, programme, carte de qualification et reprise après interruption : préparer le renouvellement FCO voyageurs sans confondre permis et qualification.",
    summary: [
      "La FCO voyageurs dure 35 heures et maintient la qualification professionnelle pour une nouvelle période de cinq ans.",
      "Elle actualise la conduite rationnelle, les réglementations, la santé-sécurité et la qualité de service.",
      "Le permis D, l’aptitude médicale et la carte de qualification doivent être contrôlés séparément.",
    ],
    sections: [
      {
        title: "FIMO et FCO ne répondent pas au même besoin",
        paragraphs: [
          "La FIMO constitue une voie de qualification initiale accélérée. La FCO est la formation continue qui permet aux conducteurs déjà qualifiés de maintenir cette qualification. Le ministère chargé des Transports fixe une durée de 140 heures pour la FIMO et de 35 heures pour la FCO.",
          "Une formation initiale longue, comme certains titres ou diplômes professionnels d’au moins 280 heures, peut également ouvrir la qualification initiale. La date de FCO dépend donc du justificatif initial et du parcours du conducteur.",
        ],
      },
      {
        title: "Quand programmer sa FCO voyageurs ?",
        paragraphs: [
          "La FCO doit être renouvelée tous les cinq ans. Il est prudent de contrôler suffisamment tôt la date portée sur la carte de qualification de conducteur, puis de rapprocher cette date de la disponibilité d’une session et des contraintes de l’employeur.",
          "Une catégorie D encore valide ne remplace pas une qualification professionnelle arrivée à échéance. Inversement, une FCO à jour ne permet pas de conduire avec une catégorie de permis expirée ou sans aptitude médicale valide.",
        ],
      },
      {
        title: "Ce que couvre le programme réglementaire",
        bullets: [
          "Perfectionnement à une conduite rationnelle centrée sur la sécurité.",
          "Actualisation des réglementations applicables au transport routier.",
          "Santé, sécurité routière et sécurité environnementale.",
          "Service, qualité et spécificités du transport de voyageurs.",
        ],
        paragraphs: [
          "La FCO n’est pas une simple formalité documentaire. Elle sert à actualiser des pratiques professionnelles et des connaissances qui évoluent entre deux cycles.",
        ],
      },
      {
        title: "Après une interruption de conduite",
        paragraphs: [
          "La situation doit être examinée à partir des justificatifs détenus, des dates de qualification et de la durée d’interruption. Évitez de déduire automatiquement qu’une FCO suffit ou qu’une nouvelle FIMO est nécessaire : demandez au centre et à l’employeur de confirmer la voie applicable avant l’inscription.",
        ],
      },
      {
        title: "Les documents à réunir",
        bullets: [
          "Permis D ou DE et date de validité.",
          "Carte de qualification de conducteur ou justificatif de qualification initiale.",
          "Dernière attestation FCO, le cas échéant.",
          "Avis médical et situation administrative du permis.",
          "Éléments demandés par l’employeur ou le centre agréé.",
        ],
      },
    ],
    notice:
      "La date et la voie de renouvellement doivent être vérifiées à partir de vos documents. Compagnon de la Route ne déduit pas votre droit à conduire d’une information déclarative isolée.",
    sources: [
      {
        label: "Ministère chargé des Transports : formation des conducteurs",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/formation-conducteurs-du-transport-routier",
        detail: "Durées FIMO, FCO et passerelle, périodicité et thèmes réglementaires.",
      },
      {
        label: "Légifrance : arrêté du 3 janvier 2008",
        url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000017799539",
        detail: "Programme et modalités des formations initiales et continues des conducteurs routiers.",
      },
      {
        label: "Service Public : contrôle médical professionnel",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1255",
        detail: "Validité médicale distincte de la qualification professionnelle.",
      },
    ],
    relatedLinks: [
      {
        href: "/fimo-passage-a-la-route",
        label: "Comprendre FIMO, FCO et passerelle",
        description: "Le cadre général avant de se concentrer sur le renouvellement.",
      },
      {
        href: "/permis-d-conducteur-professionnel",
        label: "Vérifier le permis D",
        description: "Contrôler séparément la catégorie et son aptitude médicale.",
      },
      {
        href: "/formations/conducteur-voyageurs",
        label: "Parcours conducteur de voyageurs",
        description: "Demander la fiche programme correspondant à votre situation.",
      },
    ],
    faqs: [
      {
        question: "Quelle est la durée d’une FCO voyageurs ?",
        answer: "La durée réglementaire de la formation continue obligatoire est de 35 heures.",
      },
      {
        question: "À quelle fréquence faut-il renouveler la FCO ?",
        answer: "La FCO doit être renouvelée tous les cinq ans afin de maintenir la qualification professionnelle.",
      },
      {
        question: "Une FCO renouvelle-t-elle le permis D ?",
        answer: "Non. Le renouvellement de la qualification et celui de la catégorie D sont deux démarches distinctes ; le permis reste soumis à sa propre validité et au contrôle médical.",
      },
    ],
    reviewedAt,
    reviewedAtIso,
    nextReviewAt,
  },
  franceTravail: {
    slug: "aif-france-travail-formation-conducteur",
    eyebrow: "France Travail · AIF",
    title: "AIF France Travail : financer une formation de conducteur",
    description:
      "Projet validé, devis, espace personnel et décision : comprendre la demande d’AIF France Travail pour une formation de conducteur de voyageurs.",
    summary: [
      "L’AIF peut compléter un financement existant ou couvrir des frais pédagogiques lorsqu’aucune autre solution ne suffit.",
      "Le projet de formation doit être cohérent avec le projet personnalisé d’accès à l’emploi.",
      "Le devis n’est financé qu’après étude et acceptation par France Travail ; la transmission ne vaut pas accord.",
    ],
    sections: [
      {
        title: "À quoi sert l’AIF ?",
        paragraphs: [
          "France Travail présente l’Aide individuelle à la formation comme une aide aux frais pédagogiques. Elle peut intervenir lorsqu’un ou plusieurs financements laissent un reste à charge ou lorsqu’aucun financement ne couvre la formation envisagée.",
          "Cette possibilité n’est pas un droit automatique à une prise en charge. La formation doit être validée dans le cadre du projet personnalisé d’accès à l’emploi et le devis fait l’objet d’une décision.",
        ],
      },
      {
        title: "Avant de demander un devis",
        bullets: [
          "Décrire le poste visé et le bassin d’emploi au conseiller.",
          "Vérifier si une place financée existe déjà via France Travail ou la Région.",
          "Comparer la certification, les prérequis, les dates et le lieu de la formation.",
          "Identifier les droits CPF éventuellement mobilisables et le reste à financer.",
          "Faire confirmer que le projet de formation est inscrit dans l’accompagnement vers l’emploi.",
        ],
      },
      {
        title: "Le parcours du devis",
        paragraphs: [
          "L’organisme établit un devis en ligne et le transmet dans l’espace personnel du candidat. Le candidat doit le relire, vérifier qu’il correspond au programme présenté et le valider avant sa transmission à France Travail.",
          "France Travail étudie ensuite la cohérence du devis avec le projet de retour à l’emploi et accepte ou refuse la demande. La décision est communiquée dans l’espace personnel ou l’application Ma Formation.",
        ],
      },
      {
        title: "Les pièces qui rendent le projet compréhensible",
        bullets: [
          "Une fiche programme à jour et un devis portant le même intitulé.",
          "Le code et le statut de la certification lorsqu’une certification est préparée.",
          "Les prérequis déjà remplis et ceux restant à obtenir.",
          "Des offres d’emploi réelles correspondant au métier et au territoire visés.",
          "Le calendrier, les frais annexes et les solutions prévues pendant la formation.",
        ],
      },
      {
        title: "AIF, CPF, AFC et POEI : ne pas mélanger les démarches",
        paragraphs: [
          "L’AIF répond à une demande individuelle. Le CPF mobilise les droits du titulaire sur une offre éligible. L’Action de formation conventionnée correspond à des places achetées par France Travail. La POEI prépare un candidat à une prise de poste identifiée avec un employeur.",
          "Selon la situation, l’un de ces dispositifs peut être plus adapté qu’un autre. Le conseiller et le financeur doivent confirmer le montage retenu avant le démarrage.",
        ],
      },
    ],
    notice:
      "Compagnon de la Route peut fournir les documents du parcours envisagé, mais ne décide pas de l’attribution d’une AIF et ne garantit aucun montant ni délai de réponse.",
    sources: [
      {
        label: "France Travail : Aide individuelle à la formation",
        url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html",
        detail: "Public, frais concernés, cohérence avec le PPAE et traitement du devis.",
      },
      {
        label: "France Travail : comment financer ma formation",
        url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/jai-repere-des-formations-intere.html",
        detail: "Panorama des financements individuels et préalables au recrutement.",
      },
      {
        label: "France Travail : Action de formation conventionnée",
        url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laction-de-formation-conventionn.html",
        detail: "Places de formation achetées dans le cadre de marchés publics.",
      },
    ],
    relatedLinks: [
      {
        href: "/financement-formation-conducteur-voyageurs",
        label: "Comparer tous les financements",
        description: "CPF, France Travail, employeur et OPCO selon votre statut.",
      },
      {
        href: "/reconversion-conducteur-voyageurs",
        label: "Construire une reconversion",
        description: "Valider le métier avant de choisir et financer une formation.",
      },
      {
        href: "/journal/choisir-formation-conducteur-voyageurs",
        label: "Vérifier une formation",
        description: "Les dix points à contrôler avant d’accepter un devis.",
      },
    ],
    faqs: [
      {
        question: "L’AIF finance-t-elle automatiquement une formation de conducteur ?",
        answer: "Non. France Travail étudie la cohérence de la formation avec le projet de retour à l’emploi puis accepte ou refuse le devis.",
      },
      {
        question: "Faut-il être indemnisé pour demander une AIF ?",
        answer: "France Travail indique que l’AIF s’adresse aux demandeurs d’emploi inscrits, qu’ils soient indemnisés ou non, ainsi qu’à certains publics accompagnés.",
      },
      {
        question: "La validation du devis par le candidat vaut-elle accord ?",
        answer: "Non. Elle transmet la demande à France Travail ; seule la décision notifiée après étude confirme ou refuse la prise en charge.",
      },
    ],
    reviewedAt,
    reviewedAtIso,
    nextReviewAt,
  },
  opcoMobilites: {
    slug: "financement-opco-mobilites-formation-transport",
    eyebrow: "OPCO Mobilités",
    title: "OPCO Mobilités : financer une formation dans le transport",
    description:
      "Entreprise, salarié ou candidat : comprendre qui dépose la demande, quels dispositifs examiner et pourquoi une prise en charge OPCO doit rester écrite.",
    summary: [
      "L’OPCO accompagne d’abord les entreprises relevant de son périmètre et finance selon la branche, le dispositif, l’effectif et les fonds disponibles.",
      "Le plan de développement des compétences, l’alternance ou une préparation opérationnelle répondent à des logiques différentes.",
      "Un devis ou une éligibilité de principe ne vaut pas accord : l’entreprise doit obtenir la notification de prise en charge.",
    ],
    sections: [
      {
        title: "Qui sollicite l’OPCO ?",
        paragraphs: [
          "Dans un projet porté par l’entreprise, l’employeur ou son service compétent vérifie son rattachement, choisit le dispositif et dépose la demande. Le salarié ou le candidat peut préparer son projet, mais ne doit pas présenter l’intervention de l’OPCO comme acquise avant la réponse adressée à l’entreprise.",
          "OPCO Mobilités couvre plusieurs branches de la mobilité. Les critères diffèrent selon la convention collective, la taille de l’entreprise, la certification visée et le type de contrat.",
        ],
      },
      {
        title: "Les dispositifs à distinguer",
        bullets: [
          "Plan de développement des compétences pour une action décidée par l’employeur.",
          "Contrat d’apprentissage ou de professionnalisation pour une formation en alternance.",
          "Préparation opérationnelle à l’emploi collective pour des besoins identifiés par une branche.",
          "Préparation opérationnelle à l’emploi individuelle lorsqu’un recrutement précis nécessite une adaptation avant la prise de poste.",
          "Abondement ou autre dispositif selon les règles applicables au moment de la demande.",
        ],
      },
      {
        title: "Pourquoi les critères 2026 doivent être relus",
        paragraphs: [
          "Les guides pratiques OPCO Mobilités précisent que les prises en charge s’effectuent dans la limite des fonds disponibles. Des plafonds, priorités de branche et conditions d’effectif peuvent s’appliquer. Une règle lue pour une autre branche ou une autre année ne doit pas être transposée automatiquement.",
          "Avant de choisir une formation, l’entreprise doit donc consulter le guide correspondant à sa branche et à la date de début prévue, puis vérifier les délais de dépôt.",
        ],
      },
      {
        title: "Le dossier à préparer côté entreprise",
        bullets: [
          "Programme, objectifs, durée, dates, lieu et modalités pédagogiques.",
          "Devis et convention portant le même intitulé.",
          "Code RNCP ou autre référence lorsqu’une certification est annoncée.",
          "Situation du bénéficiaire et dispositif contractuel retenu.",
          "Coûts pédagogiques, rémunération et frais annexes clairement séparés.",
          "Accord écrit de prise en charge avant le démarrage.",
        ],
      },
      {
        title: "Pour un demandeur d’emploi",
        paragraphs: [
          "Une action soutenue par un OPCO peut exister dans le cadre d’une POEC ou d’un recrutement, mais le candidat ne choisit pas seul d’utiliser un budget OPCO. Il convient de vérifier l’existence d’une action ouverte avec France Travail, l’OPCO et les entreprises concernées.",
        ],
      },
    ],
    notice:
      "Les critères de prise en charge évoluent. BOAZ fournit les pièces de formation, tandis que l’entreprise et l’OPCO restent responsables du dispositif retenu et de la décision de financement.",
    sources: [
      {
        label: "OPCO Mobilités : site officiel",
        url: "https://www.opcomobilites.fr/",
        detail: "Accès aux branches, services, dispositifs et guides pratiques à jour.",
      },
      {
        label: "OPCO Mobilités : rapport d’activité 2024",
        url: "https://www.opcomobilites.fr/fileadmin/user_upload/documentation/Rapport_d_activite/RA_2024/Rapport-Activite-2024_WEB.pdf",
        detail: "Rôle de l’OPCO et actions de formation, dont les POEC transport de voyageurs.",
      },
      {
        label: "France Travail : financements de formation",
        url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/jai-repere-des-formations-intere.html",
        detail: "Distinction entre financements individuels et formations préalables au recrutement.",
      },
    ],
    relatedLinks: [
      {
        href: "/financement-formation-conducteur-voyageurs",
        label: "Panorama des financements",
        description: "Identifier le bon interlocuteur à partir du statut du candidat.",
      },
      {
        href: "/aif-france-travail-formation-conducteur",
        label: "AIF France Travail",
        description: "La démarche distincte pour une demande individuelle.",
      },
      {
        href: "/contact?profil=entreprise&projet=recrutement",
        label: "Présenter un besoin entreprise",
        description: "Qualifier le recrutement et les documents nécessaires.",
      },
    ],
    faqs: [
      {
        question: "Un candidat peut-il demander directement un financement à l’OPCO ?",
        answer: "Dans un projet d’entreprise, la demande est portée par l’employeur. Pour une action collective destinée à des demandeurs d’emploi, il faut vérifier l’action ouverte avec France Travail et les partenaires concernés.",
      },
      {
        question: "OPCO Mobilités finance-t-il toujours la totalité de la formation ?",
        answer: "Non. Les critères, plafonds et fonds disponibles varient selon la branche, l’effectif, le dispositif et l’année. Seule la notification de prise en charge précise le montant accordé.",
      },
      {
        question: "Faut-il attendre l’accord avant le début de la formation ?",
        answer: "Oui, il est prudent d’obtenir la notification écrite et de vérifier les règles de dépôt avant tout démarrage ou engagement financier.",
      },
    ],
    reviewedAt,
    reviewedAtIso,
    nextReviewAt,
  },
  careerChange: {
    slug: "reconversion-conducteur-voyageurs",
    eyebrow: "Reconversion professionnelle",
    title: "Se reconvertir comme conducteur de voyageurs",
    description:
      "Tester le métier, vérifier l’aptitude, choisir une qualification et sécuriser le financement : une méthode réaliste pour préparer sa reconversion.",
    summary: [
      "Une immersion permet de confronter le projet aux horaires, au service voyageurs et à l’environnement réel d’un exploitant.",
      "Le parcours dépend de l’âge, des permis, de l’aptitude médicale, des qualifications détenues et du poste visé.",
      "Aucune formation ni aucun financement ne doit être considéré comme garanti avant validation écrite.",
    ],
    sections: [
      {
        title: "Commencer par le travail réel, pas par la promesse de formation",
        paragraphs: [
          "La conduite de voyageurs combine sécurité, ponctualité, relation avec le public, contrôles du véhicule et application des consignes d’exploitation. Les services peuvent commencer tôt, finir tard, être coupés ou se dérouler les week-ends et jours fériés.",
          "Avant de choisir une formation, consultez plusieurs offres réelles et échangez avec des professionnels. Une contrainte acceptable pour un poste urbain peut être incompatible avec votre organisation familiale sur un service interurbain ou scolaire.",
        ],
      },
      {
        title: "Tester le métier en immersion",
        paragraphs: [
          "La période de mise en situation en milieu professionnel permet de découvrir un métier, de confirmer un projet ou d’initier un recrutement. La plateforme publique Immersion Facile indique qu’elle est courte, non rémunérée et encadrée par une convention.",
          "Une immersion ne permet pas de conduire sans les autorisations requises. Elle sert à observer l’organisation, le dépôt, les prises de service, la relation voyageurs et les contraintes concrètes du poste.",
        ],
      },
      {
        title: "Faire l’inventaire de son point de départ",
        bullets: [
          "Permis détenus, date d’obtention et situation administrative.",
          "Âge et voie de qualification envisageable.",
          "Aptitude médicale pour la catégorie D.",
          "Compétences transférables : sécurité, service, autonomie, ponctualité et gestion des aléas.",
          "Contraintes personnelles : mobilité, amplitude, revenu pendant la formation et date de disponibilité.",
        ],
      },
      {
        title: "Choisir une voie de qualification",
        paragraphs: [
          "Selon la situation, le projet peut passer par un titre professionnel, un diplôme, un permis D complété par une FIMO, une alternance ou une préparation préalable à un recrutement. Le parcours le plus court n’est pas nécessairement celui qui répond au poste visé.",
          "Demandez un positionnement, une fiche programme et la référence de la certification. Faites préciser ce qui est préparé, ce qui est évalué et ce qui restera à réaliser après la formation.",
        ],
      },
      {
        title: "Financer selon son statut",
        paragraphs: [
          "Un demandeur d’emploi peut examiner avec son conseiller les places conventionnées, le CPF, l’AIF ou une préparation à l’emploi. Un salarié qui souhaite changer de métier peut vérifier les conditions du projet de transition professionnelle et se faire accompagner par un conseiller en évolution professionnelle.",
          "Ces dispositifs sont soumis à des critères et à des décisions. Préparez le dossier tôt et n’interrompez pas votre contrat ou vos revenus sur la base d’un accord oral.",
        ],
      },
      {
        title: "Préparer la candidature avant la fin du parcours",
        bullets: [
          "Décrire les compétences transférables avec des exemples concrets.",
          "Vérifier les lieux de prise de service et les amplitudes proposées.",
          "Demander le type de contrat, le volume horaire et les éléments de rémunération.",
          "Préparer des situations démontrant calme, respect des règles et sens du service.",
          "Ne pas présenter l’obtention d’une formation comme une garantie d’embauche.",
        ],
      },
    ],
    notice:
      "La faisabilité d’une reconversion se vérifie individuellement. Aucun âge, délai d’accès à l’emploi ou financement universel n’est annoncé sans étude du dossier et du marché local.",
    sources: [
      {
        label: "Immersion Facile : découvrir un métier",
        url: "https://immersion-facile.beta.gouv.fr/accueil-beneficiaires",
        detail: "Objectifs, convention et cadre d’une immersion professionnelle.",
      },
      {
        label: "Service Public : projet de transition professionnelle",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14018",
        detail: "Conditions du congé permettant de suivre une formation certifiante pour changer de métier.",
      },
      {
        label: "Onisep : conducteur de bus ou d’autocar",
        url: "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-bus-ou-d-autocar",
        detail: "Missions, qualités et conditions générales d’exercice.",
      },
    ],
    relatedLinks: [
      {
        href: "/devenir-conducteur-de-voyageurs",
        label: "Le parcours complet",
        description: "Permis, qualification, financement et candidature.",
      },
      {
        href: "/aif-france-travail-formation-conducteur",
        label: "Demandeur d’emploi : l’AIF",
        description: "Préparer le projet et le devis sans présumer de l’accord.",
      },
      {
        href: "/reussir-embauche-conducteur-car",
        label: "Préparer son recrutement",
        description: "CV, entretien et conditions réelles du poste.",
      },
    ],
    faqs: [
      {
        question: "Peut-on tester le métier avant de s’inscrire en formation ?",
        answer: "Oui. Une immersion professionnelle peut permettre d’observer le métier et de confirmer le projet dans un cadre conventionné, sans conduire un véhicule sans les autorisations requises.",
      },
      {
        question: "Existe-t-il un âge unique pour se reconvertir ?",
        answer: "Non. La faisabilité dépend notamment de la voie de qualification, des règles du permis D, de l’aptitude médicale et des critères de recrutement de l’employeur.",
      },
      {
        question: "Une reconversion garantit-elle un emploi ?",
        answer: "Non. La formation prépare à un métier ou à une certification ; l’embauche dépend ensuite des résultats, du profil et des offres réelles du territoire.",
      },
    ],
    reviewedAt,
    reviewedAtIso,
    nextReviewAt,
  },
} as const satisfies Record<string, VerifiedGuide>;

export const seoClusterGuideList: readonly VerifiedGuide[] = Object.values(seoClusterGuides);

