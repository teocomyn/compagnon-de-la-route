import type { Metadata } from "next";

export type VerifiedGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: readonly string[];
  sections: readonly {
    title: string;
    paragraphs?: readonly string[];
    bullets?: readonly string[];
  }[];
  notice: string;
  sources: readonly {
    label: string;
    url: string;
    detail: string;
  }[];
  reviewedAt: string;
};

export const verifiedGuides = {
  financing: {
    slug: "financement-formation-conducteur-voyageurs",
    eyebrow: "Guide financement",
    title: "Financer une formation de conducteur de voyageurs",
    description:
      "CPF, France Travail, employeur ou OPCO : les pistes à vérifier et les justificatifs à obtenir avant de commencer une formation.",
    summary: [
      "L’éligibilité et le montant mobilisable se vérifient sur les services officiels, pour une offre de formation précise.",
      "Une demande d’AIF est étudiée par France Travail au regard du projet de retour à l’emploi ; elle peut être acceptée ou refusée.",
      "Une prise en charge n’est acquise qu’après confirmation écrite du financeur.",
    ],
    sections: [
      {
        title: "Commencer par votre situation",
        paragraphs: [
          "Le bon parcours de financement dépend de votre statut au moment de la demande : salarié, demandeur d’emploi, employeur à l’initiative du projet ou autre situation. Avant de déposer un dossier, demandez une fiche programme et un devis portant exactement le même intitulé, les mêmes dates et le même objectif de certification.",
        ],
        bullets: [
          "Salarié : consulter ses droits CPF et échanger avec l’employeur lorsque la formation se déroule sur le temps de travail ou qu’un abondement est envisagé.",
          "Demandeur d’emploi : présenter le projet au conseiller France Travail avant de valider un devis ou de commencer la formation.",
          "Projet porté par l’entreprise : demander au service RH ou à l’employeur de vérifier les règles applicables auprès de son opérateur de compétences.",
        ],
      },
      {
        title: "CPF : vérifier l’offre, pas seulement le métier",
        paragraphs: [
          "Le CPF ne finance pas automatiquement toute formation liée au transport. Les droits disponibles, l’éligibilité de l’action et les éventuelles règles de participation se contrôlent dans l’espace officiel Mon Compte Formation. Pour le groupe lourd, Service Public rappelle aussi que le permis doit contribuer au projet professionnel et que le titulaire ne doit pas faire l’objet d’une suspension ou d’une interdiction de demander un permis.",
          "Ne communiquez jamais vos identifiants FranceConnect ou Mon Compte Formation à un organisme. Vous restez maître de votre compte et de la validation du dossier.",
        ],
      },
      {
        title: "France Travail et l’AIF",
        paragraphs: [
          "L’Aide individuelle à la formation peut compléter d’autres financements ou, dans certains cas, couvrir les frais pédagogiques. France Travail précise toutefois que la formation doit être cohérente avec le projet personnalisé d’accès à l’emploi. Le conseiller étudie le devis puis accepte ou refuse la demande.",
          "Un échange avec le conseiller et la transmission du devis ne valent donc pas accord. Attendez la décision visible dans votre espace personnel avant tout engagement financier.",
        ],
      },
      {
        title: "Employeur, OPCO et autres abondements",
        paragraphs: [
          "Service Public cite notamment l’employeur et l’OPCO parmi les acteurs susceptibles de compléter un financement. Les règles varient selon l’entreprise, la branche, le dispositif et les budgets disponibles. L’organisme de formation peut fournir les pièces du dossier, mais seul le financeur confirme la prise en charge.",
        ],
      },
      {
        title: "La vérification finale avant inscription",
        bullets: [
          "Comparer le devis, la convention ou le contrat et la fiche programme.",
          "Vérifier l’intitulé et le code de la certification lorsqu’une certification est annoncée.",
          "Obtenir le montant pris en charge, le reste éventuel et les frais annexes par écrit.",
          "Contrôler les dates, le lieu, les prérequis et les conditions d’annulation.",
          "Ne pas commencer la formation sur la base d’une promesse orale de financement.",
        ],
      },
    ],
    notice:
      "Compagnon de la Route étudie les possibilités avec le candidat, sans garantir l’acceptation d’un financement ni l’absence de reste à charge.",
    sources: [
      {
        label: "Service Public — Compte personnel de formation",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10705",
        detail: "Règles du CPF, formations accessibles et cas des permis du groupe lourd.",
      },
      {
        label: "France Travail — Aide individuelle à la formation",
        url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html",
        detail: "Bénéficiaires, cohérence avec le projet professionnel et traitement du devis.",
      },
      {
        label: "Mon Compte Formation",
        url: "https://www.moncompteformation.gouv.fr/",
        detail: "Consultation des droits et recherche d’une offre éligible.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  career: {
    slug: "metier-conducteur-de-car-debouches",
    eyebrow: "Guide métier",
    title: "Conducteur de bus ou d’autocar : métier et débouchés",
    description:
      "Missions, environnements de travail, contraintes horaires et évolutions possibles dans le transport de voyageurs.",
    summary: [
      "Le métier ne se limite pas à la conduite : contrôles de sécurité, accueil, information et gestion des incidents en font partie.",
      "Les postes existent sur des lignes urbaines, interurbaines, scolaires, des navettes, du transport à la demande ou du tourisme.",
      "Les besoins réels, horaires et contrats varient selon le territoire et l’employeur ; une formation ne garantit pas une embauche.",
    ],
    sections: [
      {
        title: "Un métier de conduite et de service",
        paragraphs: [
          "La fiche officielle du titre professionnel décrit une mission centrale : transporter les voyageurs dans des conditions optimales de sécurité et de confort. Le conducteur contrôle le véhicule et les documents obligatoires, accueille et renseigne la clientèle, applique les consignes d’exploitation et réagit selon les procédures en cas d’incident.",
          "La ponctualité, le calme, l’attention et la qualité de la relation avec les passagers sont aussi importants que la maîtrise du véhicule.",
        ],
      },
      {
        title: "Des environnements de travail variés",
        bullets: [
          "Lignes régulières urbaines ou interurbaines.",
          "Transport scolaire et services en période scolaire.",
          "Navettes de gare, d’aéroport ou d’entreprise.",
          "Transport à la demande et accompagnement de personnes à mobilité réduite.",
          "Services occasionnels, tourisme ou grand tourisme selon les qualifications et l’employeur.",
        ],
        paragraphs: [
          "Ces activités n’impliquent ni les mêmes horaires, ni les mêmes amplitudes, ni le même type de contrat. Il faut donc examiner une offre d’emploi concrète plutôt que se fier à une présentation générale du secteur.",
        ],
      },
      {
        title: "Horaires et conditions à regarder en face",
        paragraphs: [
          "France Compétences indique que l’activité peut s’exercer de jour comme de nuit, les week-ends ou jours fériés, parfois en plusieurs vacations dans une même journée. Selon le service, des nuits hors domicile sont possibles. Les temps de conduite, de pause et de repos sont réglementés, mais l’organisation quotidienne dépend du poste.",
          "Avant de candidater, demandez l’amplitude, les coupures, le lieu de prise de service, le volume horaire, le type de véhicule et la part de relation clientèle.",
        ],
      },
      {
        title: "Débouchés et évolutions possibles",
        paragraphs: [
          "La fiche RNCP mentionne des emplois de conducteur d’autobus ou d’autocar, conducteur en période scolaire, conducteur de navette, conducteur accompagnateur, machiniste-receveur ou conducteur-receveur. Elle cite aussi des évolutions vers l’exploitation, le commercial, le contrôle, le tutorat, la formation ou l’encadrement d’équipe.",
          "Ces perspectives restent conditionnées par l’expérience, les habilitations, les recrutements locaux et les critères propres à chaque employeur.",
        ],
      },
      {
        title: "Tester la réalité du marché près de chez vous",
        bullets: [
          "Consulter les offres France Travail avec le code ROME N4103 et plusieurs rayons géographiques.",
          "Comparer temps plein, temps partiel, services scolaires et lignes régulières.",
          "Utiliser l’enquête Besoins en main-d’œuvre pour observer les projets de recrutement par bassin.",
          "Échanger directement avec des exploitants sur leurs prérequis et leurs prochaines campagnes.",
        ],
      },
    ],
    notice:
      "Les débouchés présentés décrivent le métier au niveau national. Ils ne constituent ni une offre d’emploi ni une garantie de recrutement à l’issue d’un parcours.",
    sources: [
      {
        label: "France Compétences — RNCP37878",
        url: "https://www.francecompetences.fr/recherche/rncp/37878/",
        detail: "Activités, compétences, conditions d’exercice et types d’emplois accessibles.",
      },
      {
        label: "Onisep — Conducteur de bus ou d’autocar",
        url: "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-bus-ou-d-autocar",
        detail: "Présentation du métier, compétences attendues et conditions de travail.",
      },
      {
        label: "France Travail — Besoins en main-d’œuvre",
        url: "https://statistiques.francetravail.org/bmo",
        detail: "Exploration des projets de recrutement par métier et par territoire.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  license: {
    slug: "permis-d-conducteur-professionnel",
    eyebrow: "Guide permis D",
    title: "Permis D et conduite professionnelle de voyageurs",
    description:
      "Véhicules autorisés, âge, visite médicale, épreuves et qualifications complémentaires : comprendre le rôle exact du permis D.",
    summary: [
      "Le permis D autorise la conduite d’un véhicule de transport de personnes comportant plus de neuf places assises, conducteur compris.",
      "L’âge minimal est en principe de 24 ans, avec des exceptions dans le cadre de certaines formations professionnelles de conducteur.",
      "Le permis D seul ne résume pas toutes les conditions d’exercice professionnel : qualification initiale, FCO et aptitude médicale doivent aussi être vérifiées.",
    ],
    sections: [
      {
        title: "Ce que permet le permis D",
        paragraphs: [
          "Service Public indique que le permis D concerne les véhicules affectés au transport de personnes comportant plus de neuf places assises, conducteur compris. Il permet également de tracter une remorque dont le poids total autorisé en charge ne dépasse pas 750 kg. Au-delà, la catégorie DE peut être nécessaire.",
          "Cette catégorie de permis est une autorisation de conduite. Elle ne constitue pas, à elle seule, une qualification professionnelle complète pour exercer comme conducteur de voyageurs.",
        ],
      },
      {
        title: "Âge, permis préalable et aptitude médicale",
        paragraphs: [
          "Pour passer le permis D, il faut notamment détenir le permis B. L’âge minimal est en principe de 24 ans, sauf dans le cadre de certaines formations professionnelles de conducteur, notamment un CAP, un baccalauréat professionnel ou un titre professionnel prévu par la réglementation.",
          "Un contrôle médical auprès d’un médecin agréé est obligatoire avant les épreuves. Le médecin ne doit pas être le médecin traitant. Les autres conditions administratives dépendent notamment de la résidence et de la situation du candidat.",
        ],
      },
      {
        title: "Comment se déroule l’examen",
        paragraphs: [
          "L’examen pratique comprend une épreuve hors circulation et une épreuve en circulation. La première vérifie notamment les connaissances de réglementation, de sécurité, de mécanique et la maniabilité. La seconde évalue l’installation, la sécurité à bord, la prise d’information, l’adaptation de l’allure, l’application des règles et le partage de la chaussée.",
          "Les modalités exactes d’inscription, le besoin de repasser l’épreuve théorique et les pièces justificatives doivent être contrôlés sur Service Public ou auprès du centre au moment du dossier.",
        ],
      },
      {
        title: "Validité et renouvellement médical",
        paragraphs: [
          "La validité de la catégorie D dépend de l’âge. Service Public indique une durée de cinq ans avant 55 ans, puis une durée adaptée à l’approche de 60 ans et un renouvellement annuel à partir de 60 ans. Le renouvellement exige un contrôle médical et une démarche en ligne avant l’expiration.",
          "Si la date du contrôle est dépassée, le permis n’est pas automatiquement annulé, mais il perd sa validité. Il ne faut donc pas conduire professionnellement avec une catégorie expirée.",
        ],
      },
      {
        title: "Permis, qualification initiale et FCO : trois vérifications distinctes",
        bullets: [
          "Permis D ou DE en cours de validité selon le véhicule conduit.",
          "Qualification initiale obtenue par une voie reconnue : FIMO ou formation longue équivalente selon la situation.",
          "Formation continue obligatoire à jour pour maintenir la qualification professionnelle.",
          "Aptitude médicale et carte de qualification de conducteur valides.",
          "Éventuels prérequis supplémentaires fixés par l’employeur ou le type de service.",
        ],
      },
    ],
    notice:
      "Le parcours exact proposé par Compagnon de la Route, les catégories de permis préparées et la qualification visée sont précisés dans la fiche programme contractuelle avant inscription.",
    sources: [
      {
        label: "Service Public — Permis D",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2844",
        detail: "Véhicules autorisés, conditions, examen et durée de validité.",
      },
      {
        label: "Service Public — Contrôle médical professionnel",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1255",
        detail: "Périodicité du contrôle médical selon l’âge et la catégorie.",
      },
      {
        label: "Ministère chargé des Transports — Formation des conducteurs",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/formation-conducteurs-du-transport-routier",
        detail: "Articulation entre permis, qualification initiale, FIMO et FCO.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  fimo: {
    slug: "fimo-passage-a-la-route",
    eyebrow: "Guide FIMO voyageurs",
    title: "FIMO voyageurs, FCO et passage à la conduite professionnelle",
    description:
      "Rôle de la FIMO, durée réglementaire, programme, renouvellement FCO et points à contrôler avant une prise de poste.",
    summary: [
      "La FIMO est une voie de qualification initiale accélérée distincte du permis de conduire.",
      "La FIMO voyageurs dure 140 heures et comprend conduite, réglementations, sécurité, santé et qualité de service.",
      "La FCO dure 35 heures et doit ensuite être renouvelée tous les cinq ans pour maintenir la qualification.",
    ],
    sections: [
      {
        title: "À quoi sert la FIMO voyageurs ?",
        paragraphs: [
          "La formation initiale minimale obligatoire est une qualification initiale permettant la pratique professionnelle de la conduite de véhicules lourds. Pour le transport de voyageurs, elle s’ajoute à la détention de la catégorie de permis correspondant au véhicule.",
          "Elle n’est pas l’unique voie de qualification initiale : certaines formations longues, certains titres ou diplômes peuvent produire une équivalence prévue par les textes. Il faut vérifier la situation précise du candidat et la référence du diplôme, plutôt que supposer qu’une dispense s’applique.",
        ],
      },
      {
        title: "Une durée réglementaire de 140 heures",
        paragraphs: [
          "L’annexe II de l’arrêté du 3 janvier 2008 fixe la durée totale de la FIMO voyageurs à 140 heures. Le programme associe pratique de la conduite, réglementation sociale et du transport, santé et sécurité routière, prévention des risques, prise en compte des voyageurs handicapés et qualité de service.",
          "La formation se termine par une évaluation des compétences acquises. Une simple présence administrative ne suffit donc pas à résumer le parcours.",
        ],
      },
      {
        title: "Les quatre blocs du programme réglementaire",
        bullets: [
          "Conduite rationnelle et sûre, avec pratique individuelle et prise en compte de l’environnement.",
          "Réglementations applicables au transport de voyageurs et aux temps de conduite et de repos.",
          "Santé, sécurité routière, prévention des risques, secours et gestion des situations difficiles.",
          "Service, accessibilité, relation voyageurs et environnement économique du transport.",
        ],
      },
      {
        title: "FCO : maintenir la qualification dans le temps",
        paragraphs: [
          "Le Code des transports impose une formation continue obligatoire tous les cinq ans, la première intervenant dans les cinq années suivant l’obtention de la qualification initiale. La FCO dure 35 heures.",
          "Le permis et la qualification ont donc des échéances distinctes. Le conducteur et l’employeur doivent contrôler à la fois la validité de la catégorie de permis, le suivi médical et la date de la qualification professionnelle.",
        ],
      },
      {
        title: "Passerelle et changement de secteur",
        paragraphs: [
          "Un conducteur déjà qualifié dans le transport de marchandises peut, sous réserve de détenir le permis requis, accéder au secteur voyageurs par une formation spécifique dite passerelle. Le ministère chargé des Transports indique une durée de 35 heures. Le dossier doit être vérifié par le centre agréé avant l’entrée en formation.",
        ],
      },
      {
        title: "Les documents à contrôler avant de prendre la route",
        bullets: [
          "Catégorie de permis adaptée et en cours de validité.",
          "Avis médical et échéance de renouvellement à jour.",
          "Attestation de qualification initiale ou équivalence réellement applicable.",
          "Carte de qualification de conducteur et date de FCO.",
          "Agrément du centre pour la formation réglementaire concernée.",
        ],
      },
    ],
    notice:
      "Cette page explique le cadre national. Elle ne confirme pas que la FIMO constitue le parcours adapté à votre situation ni qu’elle est incluse dans une offre Compagnon de la Route.",
    sources: [
      {
        label: "Ministère chargé des Transports — FIMO, FCO et passerelles",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/formation-conducteurs-du-transport-routier",
        detail: "Présentation du dispositif de qualification initiale et continue.",
      },
      {
        label: "Légifrance — Programme FIMO voyageurs",
        url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051763804",
        detail: "Annexe réglementaire détaillant le programme et les 140 heures.",
      },
      {
        label: "Légifrance — Formation continue obligatoire",
        url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000023086525/LEGISCTA000033450447/",
        detail: "Règles de renouvellement de la qualification professionnelle.",
      },
      {
        label: "Service Public — Plan de développement des compétences",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11267",
        detail: "FIMO et FCO comme formations obligatoires pour les conducteurs routiers.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  faq: {
    slug: "faq-conducteur-de-voyageurs",
    eyebrow: "Questions fréquentes",
    title: "FAQ du futur conducteur de voyageurs",
    description:
      "Réponses vérifiées aux questions essentielles sur le permis D, la FIMO, le titre professionnel, le financement et l’accès à l’emploi.",
    summary: [
      "Le permis, la qualification professionnelle et l’aptitude médicale sont des éléments distincts à maintenir à jour.",
      "Le contenu contractuel du parcours doit préciser la certification, les dates, la durée, le prix et les prérequis.",
      "Aucun organisme sérieux ne peut garantir à l’avance un financement, une certification ou une embauche.",
    ],
    sections: [
      {
        title: "Le permis D suffit-il pour travailler ?",
        paragraphs: [
          "Pas dans toutes les situations. Le permis D autorise la conduite du véhicule correspondant, mais l’exercice professionnel suppose aussi une qualification initiale reconnue, puis une formation continue à jour. L’aptitude médicale et les documents professionnels doivent également être valides.",
        ],
      },
      {
        title: "Quel âge faut-il avoir pour passer le permis D ?",
        paragraphs: [
          "L’âge minimal est en principe de 24 ans. Service Public prévoit toutefois des exceptions lorsque le candidat suit certaines formations professionnelles de conducteur, comme un CAP, un baccalauréat professionnel ou un titre professionnel prévu par la réglementation.",
        ],
      },
      {
        title: "Quelle différence entre permis D, FIMO et titre professionnel ?",
        paragraphs: [
          "Le permis D est une catégorie du permis de conduire. La FIMO est une voie accélérée de qualification initiale professionnelle de 140 heures. Un titre professionnel est une certification enregistrée au RNCP, avec des compétences et des évaluations définies. Selon sa référence et les textes applicables, une formation longue certifiante peut valoir qualification initiale : le code exact doit être vérifié.",
        ],
      },
      {
        title: "Qu’est-ce que la FCO ?",
        paragraphs: [
          "La formation continue obligatoire actualise la qualification du conducteur. Elle dure 35 heures et doit être renouvelée tous les cinq ans. Sa date d’échéance ne se confond pas nécessairement avec celle du permis ou du contrôle médical.",
        ],
      },
      {
        title: "Une visite médicale est-elle obligatoire ?",
        paragraphs: [
          "Oui. Un contrôle auprès d’un médecin agréé est nécessaire avant les épreuves du permis D puis pour son renouvellement. La périodicité dépend de l’âge. Le médecin agréé ne doit pas être le médecin traitant du candidat.",
        ],
      },
      {
        title: "La formation peut-elle être financée par le CPF ou France Travail ?",
        paragraphs: [
          "C’est possible selon l’offre, le statut et le projet, mais jamais automatique. L’éligibilité et les droits se vérifient sur Mon Compte Formation. Une demande d’AIF est étudiée par France Travail au regard du projet de retour à l’emploi et peut être acceptée ou refusée.",
        ],
      },
      {
        title: "Le titre professionnel actuellement enregistré est-il RNCP37878 ?",
        paragraphs: [
          "Au 25 août 2026, France Compétences présente RNCP37878 comme la fiche active du titre professionnel Conducteur de transport en commun sur route, avec une échéance d’enregistrement au 7 juin 2028. Cette donnée doit être recontrôlée au moment de l’inscription et comparée au code écrit sur la fiche programme.",
        ],
      },
      {
        title: "Une formation garantit-elle un emploi ?",
        paragraphs: [
          "Non. Elle peut préparer aux compétences attendues et faciliter la rencontre avec des employeurs, mais le recrutement dépend des besoins locaux, des critères de l’entreprise, des qualifications obtenues et du candidat. Le contrat de travail reste une décision distincte.",
        ],
      },
      {
        title: "Que faut-il recevoir avant de s’inscrire ?",
        bullets: [
          "Une fiche programme à jour avec objectifs, durée, dates, lieu et prérequis.",
          "L’intitulé et le code de la certification éventuellement visée.",
          "Un devis et les conditions contractuelles, notamment d’annulation.",
          "Une décision écrite du financeur lorsqu’une prise en charge est demandée.",
          "Les modalités d’évaluation, d’examen et d’accompagnement en cas d’échec.",
        ],
      },
    ],
    notice:
      "Ces réponses présentent le cadre général vérifié au 25 août 2026. La fiche programme et le contrat transmis au candidat restent les références pour une session précise.",
    sources: [
      {
        label: "Service Public — Permis D",
        url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2844",
        detail: "Conditions, examen, contrôle médical et validité.",
      },
      {
        label: "Ministère chargé des Transports — FIMO et FCO",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/formation-conducteurs-du-transport-routier",
        detail: "Qualification initiale et renouvellement professionnel.",
      },
      {
        label: "France Compétences — RNCP37878",
        url: "https://www.francecompetences.fr/recherche/rncp/37878/",
        detail: "Certification Conducteur de transport en commun sur route.",
      },
      {
        label: "France Travail — Aide individuelle à la formation",
        url: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html",
        detail: "Conditions d’étude d’une demande AIF.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  tourism: {
    slug: "formation-conducteur-autocar-tourisme",
    eyebrow: "Guide autocar et tourisme",
    title: "Conduire un autocar de tourisme : missions et conditions",
    description:
      "Services occasionnels, excursions, relation avec les groupes et contraintes de déplacement : comprendre les spécificités du tourisme en autocar.",
    summary: [
      "La conduite de tourisme associe sécurité, préparation d’itinéraire, accueil du groupe et gestion des documents du transport.",
      "Les horaires peuvent inclure week-ends, jours fériés et nuits hors domicile selon les prestations.",
      "Le permis et la qualification professionnelle sont indispensables, mais l’employeur peut demander des compétences complémentaires.",
    ],
    sections: [
      {
        title: "Une activité différente d’une ligne régulière",
        paragraphs: [
          "France Compétences distingue les lignes régulières des services occasionnels, excursions et prestations de tourisme. Le conducteur suit une commande et un itinéraire définis pour transporter un groupe, parfois pendant plusieurs jours, en France ou à l’étranger selon l’activité de l’entreprise.",
          "La mission ne se limite pas au temps passé au volant. Elle comprend la préparation du déplacement, la vérification du véhicule et des documents, l’information des passagers et la coordination avec l’exploitation ou le responsable du groupe.",
        ],
      },
      {
        title: "Les tâches propres aux excursions et voyages",
        bullets: [
          "Présenter le véhicule, le parcours et le déroulement de la prestation au groupe.",
          "Préparer ou contrôler l’itinéraire et utiliser les outils de navigation.",
          "Participer au chargement et au déchargement des bagages selon le service.",
          "Renseigner les documents administratifs liés au transport occasionnel.",
          "Informer les voyageurs en cas de modification, de retard ou d’incident.",
        ],
      },
      {
        title: "Des contraintes à évaluer avant de candidater",
        paragraphs: [
          "La fiche RNCP indique que l’emploi peut s’exercer de jour comme de nuit, le week-end ou les jours fériés. Des nuits hors domicile peuvent être nécessaires. Dans le tourisme, les périodes d’activité et les amplitudes dépendent fortement du programme des voyages et de la saison.",
          "L’autonomie, la présentation, la courtoisie et la capacité à garder son calme sont particulièrement visibles auprès d’un groupe. Une langue étrangère peut être utile ou exigée selon les destinations et la clientèle.",
        ],
      },
      {
        title: "Qualifications et compétences à vérifier",
        bullets: [
          "Permis D ou DE valide selon le véhicule et la remorque.",
          "Qualification initiale et FCO à jour, ainsi que l’aptitude médicale.",
          "Maîtrise des temps de conduite, de pause et de repos applicables.",
          "Utilisation du chronotachygraphe lorsqu’il est requis.",
          "Connaissance des procédures de sécurité, des documents et de la relation clientèle.",
        ],
      },
      {
        title: "Les questions à poser à un employeur",
        bullets: [
          "Quel pourcentage de l’activité concerne le tourisme ou le grand tourisme ?",
          "Combien de nuits hors domicile et quels territoires sont habituellement couverts ?",
          "Comment sont organisés les relais, les temps de repos et les frais de déplacement ?",
          "Une langue étrangère ou une expérience particulière est-elle demandée ?",
          "Quel type d’autocar, de clientèle et de documentation faut-il maîtriser ?",
        ],
      },
    ],
    notice:
      "Cette page décrit un type d’emploi. Elle ne signifie pas qu’une spécialisation tourisme ou une session correspondante est proposée par Compagnon de la Route.",
    sources: [
      {
        label: "France Compétences — RNCP37878",
        url: "https://www.francecompetences.fr/recherche/rncp/37878/",
        detail: "Missions, évaluations et évolutions vers le tourisme ou le grand tourisme.",
      },
      {
        label: "Onisep — Conducteur de bus ou d’autocar",
        url: "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-bus-ou-d-autocar",
        detail: "Conditions d’exercice et compétences attendues dans le transport de voyageurs.",
      },
      {
        label: "Ministère chargé des Transports — Transport routier de personnes",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/organisation-transports-routiers-nationaux-personnes",
        detail: "Cadre général des services réguliers et occasionnels de transport de personnes.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  school: {
    slug: "formation-transport-scolaire-conducteur",
    eyebrow: "Guide transport scolaire",
    title: "Conduire en transport scolaire : sécurité et organisation",
    description:
      "Responsabilités, prise en charge des élèves, horaires et équipements : les réalités d’un service scolaire en autocar.",
    summary: [
      "La sécurité se joue en circulation, mais aussi à l’arrêt pendant la montée et la descente des élèves.",
      "Les circuits suivent des itinéraires et points d’arrêt imposés, souvent au début et à la fin de la journée scolaire.",
      "La qualification de conducteur reste réglementée ; l’affectation à un service scolaire dépend ensuite de l’employeur.",
    ],
    sections: [
      {
        title: "Une mission centrée sur des passagers jeunes",
        paragraphs: [
          "Le guide interministériel sur la sécurité des transports scolaires rappelle que le conducteur est responsable des personnes transportées et doit tenir compte des spécificités liées aux enfants. Il suit un itinéraire imposé avec des points de prise en charge et de dépose définis.",
          "La vigilance porte sur la circulation, les conditions météorologiques, le comportement des autres usagers et les mouvements des élèves autour du véhicule.",
        ],
      },
      {
        title: "La montée et la descente sont des moments critiques",
        bullets: [
          "Approcher l’arrêt à une allure adaptée et immobiliser correctement le véhicule.",
          "Observer l’environnement immédiat avant l’ouverture et la fermeture des portes.",
          "Veiller à la sécurité des passagers lorsque le véhicule est à l’arrêt.",
          "Appliquer les procédures de l’entreprise en cas d’incident ou de comportement dangereux.",
          "Signaler les anomalies du point d’arrêt ou du circuit aux interlocuteurs compétents.",
        ],
      },
      {
        title: "Ceinture et équipements de sécurité",
        paragraphs: [
          "La Sécurité routière rappelle que les enfants passagers d’autocars de transport scolaire doivent attacher leur ceinture. Le ministère chargé des Transports indique également que les autocars sont équipés d’un éthylotest anti-démarrage, soumis à un contrôle périodique.",
          "Le conducteur applique les consignes et contrôle les équipements relevant de sa mission, mais l’entretien réglementaire du véhicule et l’organisation globale du service relèvent aussi de l’exploitant et de l’autorité organisatrice.",
        ],
      },
      {
        title: "Une organisation horaire particulière",
        paragraphs: [
          "Le transport scolaire se concentre souvent autour des horaires d’entrée et de sortie des établissements. Selon le contrat et le réseau, la journée peut comporter une coupure importante entre deux services ou être complétée par d’autres lignes.",
          "Avant d’accepter un poste, il faut demander le volume horaire garanti, l’amplitude, les périodes non travaillées, le lieu de prise de service et les tâches éventuellement réalisées entre les circuits.",
        ],
      },
      {
        title: "Préparer une affectation scolaire",
        bullets: [
          "Vérifier permis, aptitude médicale, qualification initiale et FCO.",
          "Connaître le circuit, les arrêts, les horaires et les procédures de signalement.",
          "Maîtriser les contrôles avant départ et les consignes propres au véhicule.",
          "Clarifier la gestion des incidents, retards et élèves non attendus à un arrêt.",
          "Identifier les contacts de l’exploitation et de l’autorité organisatrice.",
        ],
      },
    ],
    notice:
      "Cette page décrit le cadre général du transport scolaire. Elle ne confirme ni une spécialisation, ni une affectation, ni un contrat de travail proposé par Compagnon de la Route.",
    sources: [
      {
        label: "Ministère chargé des Transports — Sécurité des transports scolaires",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/organisation-transports-routiers-nationaux-personnes",
        detail: "Guide interministériel et organisation générale du transport scolaire.",
      },
      {
        label: "Sécurité routière — Ceinture de sécurité",
        url: "https://www.securite-routiere.gouv.fr/sites/default/files/2023-01/03-09-20_guide_ts_version_finale_validee.pdf",
        detail: "Règles et recommandations de sécurité pour les passagers d’autocars scolaires.",
      },
      {
        label: "Ministère chargé des Transports — Équipements de sécurité",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/securite-transport-routier-ethylotests-pesage-arrimage-controle-technique",
        detail: "Éthylotest anti-démarrage et sécurité du transport routier de personnes.",
      },
      {
        label: "France Compétences — RNCP37878",
        url: "https://www.francecompetences.fr/recherche/rncp/37878/",
        detail: "Emploi de conducteur en période scolaire et compétences professionnelles.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  hiring: {
    slug: "reussir-embauche-conducteur-car",
    eyebrow: "Guide candidature",
    title: "Préparer son recrutement comme conducteur de car",
    description:
      "Documents, compétences, entretien et questions sur le poste : une méthode concrète pour candidater sans promesse d’embauche.",
    summary: [
      "Une candidature solide relie chaque qualification et chaque expérience aux activités précises de l’offre.",
      "Sécurité, ponctualité, calme et relation voyageurs doivent être illustrés par des exemples concrets.",
      "Le candidat doit aussi vérifier les horaires, le contrat, le dépôt et le type de service avant d’accepter.",
    ],
    sections: [
      {
        title: "Cibler un poste précis",
        paragraphs: [
          "Le code ROME N4103 couvre plusieurs environnements : lignes urbaines ou interurbaines, scolaire, navettes, transport à la demande et tourisme. Une candidature générique ne permet pas de montrer que les contraintes du poste ont été comprises.",
          "Commencez par comparer votre situation aux critères objectifs de l’offre : permis, qualification, FCO, visite médicale, lieu de prise de service, horaires et expérience éventuellement demandée.",
        ],
      },
      {
        title: "Préparer un dossier vérifiable",
        bullets: [
          "CV à jour, centré sur les compétences utiles au poste.",
          "Catégories de permis et dates de validité clairement indiquées.",
          "Carte de qualification, FCO et échéance du contrôle médical disponibles.",
          "Certifications ou attestations présentées avec leur intitulé exact.",
          "Disponibilités et mobilité décrites sans exagération.",
        ],
      },
      {
        title: "Transformer son expérience en preuves",
        paragraphs: [
          "France Travail recommande d’identifier les savoir-faire, les savoirs et les savoir-être puis de les illustrer. Une expérience dans l’accueil, la sécurité, le service, la gestion d’un conflit ou le respect de procédures peut être pertinente même si elle vient d’un autre secteur.",
          "Préparez deux ou trois situations courtes : le contexte, ce que vous deviez faire, votre action et le résultat. Restez factuel et n’inventez jamais une expérience de conduite ou une qualification.",
        ],
      },
      {
        title: "Les thèmes probables de l’entretien",
        bullets: [
          "Motivation pour le transport de voyageurs et compréhension du service visé.",
          "Réaction face à un retard, un incident, un conflit ou un voyageur en difficulté.",
          "Organisation personnelle face aux horaires décalés ou aux coupures.",
          "Contrôles de sécurité et comportement attendu avant le départ.",
          "Qualité de l’accueil, de l’information et du compte rendu à l’exploitation.",
        ],
      },
      {
        title: "Les questions que le candidat doit poser",
        bullets: [
          "Quel type de service et quel volume horaire sont prévus ?",
          "Où se situe le dépôt et à quelle heure commence réellement la prise de service ?",
          "Le poste comporte-t-il des coupures, week-ends, nuits ou découchés ?",
          "Quelles formations internes et quel accompagnement sont prévus à l’intégration ?",
          "Quelles sont les étapes restantes avant une proposition de contrat écrite ?",
        ],
      },
      {
        title: "Vérifier le marché sans transformer un besoin en garantie",
        paragraphs: [
          "Le portail Transports et mobilités de France Travail, les offres associées au code N4103 et l’enquête Besoins en main-d’œuvre permettent d’observer les recrutements. Les résultats varient par territoire et dans le temps.",
          "Une offre publiée, un entretien ou une mise en relation ne garantissent pas une embauche. Seule une proposition contractuelle écrite précise le poste, la rémunération, le temps de travail et la date d’entrée.",
        ],
      },
    ],
    notice:
      "Compagnon de la Route peut préparer et accompagner une candidature, mais ne décide pas du recrutement et ne garantit aucun contrat de travail.",
    sources: [
      {
        label: "France Compétences — RNCP37878",
        url: "https://www.francecompetences.fr/recherche/rncp/37878/",
        detail: "Compétences, activités et types d’emplois du conducteur de voyageurs.",
      },
      {
        label: "France Travail — Transports et mobilités",
        url: "https://transports-mobilites.francetravail.fr/je-postule",
        detail: "Offres et événements de recrutement du secteur des transports.",
      },
      {
        label: "France Travail — Valoriser ses compétences",
        url: "https://www.francetravail.fr/candidat/vos-recherches/preparer-votre-candidature/accompagne-dans-sa-recherche/positionnez-vous-comme-un-offreu.html",
        detail: "Identifier et présenter savoir-faire, savoirs et savoir-être.",
      },
      {
        label: "France Travail — Préparer ses questions d’entretien",
        url: "https://www.francetravail.fr/candidat/vos-recherches/preparer-votre-candidature/entretien/entretien-embauche-pose-question.html",
        detail: "Préparation de l’entretien et clarification des conditions du poste.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
  certification: {
    slug: "certification-formation-conducteur-voyageurs",
    eyebrow: "Guide certification",
    title: "Vérifier une certification de conducteur de voyageurs",
    description:
      "RNCP, titre professionnel, Qualiopi et numéro de déclaration d’activité : comprendre ce que chaque référence prouve réellement.",
    summary: [
      "Le code RNCP, son statut et sa date d’échéance doivent être contrôlés sur France Compétences.",
      "Qualiopi atteste la qualité des processus de l’organisme dans le périmètre certifié ; elle ne délivre pas le titre professionnel.",
      "Un numéro de déclaration d’activité identifie un organisme déclaré, mais ne constitue pas un agrément de l’organisme ou de ses formations.",
    ],
    sections: [
      {
        title: "Le RNCP identifie la certification",
        paragraphs: [
          "Le Répertoire national des certifications professionnelles permet de vérifier l’intitulé, le niveau, le certificateur, les compétences visées, les voies d’accès et la période de validité d’une certification. Si un programme annonce un titre professionnel, son code RNCP doit apparaître sans ambiguïté dans les documents remis avant inscription.",
          "Au 25 août 2026, la fiche active du titre professionnel « Conducteur de transport en commun sur route » est RNCP37878, niveau 3, avec une échéance d’enregistrement indiquée au 7 juin 2028. Cette référence peut évoluer : contrôlez toujours la fiche au moment de signer.",
        ],
      },
      {
        title: "Ce que dit la fiche RNCP37878",
        paragraphs: [
          "La fiche décrit une certification composée d’une seule unité constitutive et précise qu’elle ne permet pas, à ce jour, la délivrance d’une certification partielle. Elle détaille également les modalités d’évaluation et les voies d’accès possibles.",
          "Un organisme peut préparer à une certification sans être lui-même le certificateur. Demandez donc qui organise la session d’examen, sous quelle habilitation et quel document sera remis en cas de réussite.",
        ],
      },
      {
        title: "Qualiopi ne remplace pas le RNCP",
        paragraphs: [
          "Le ministère du Travail présente Qualiopi comme une certification de la qualité des processus mis en œuvre par les prestataires. Elle est requise pour accéder à certains fonds publics ou mutualisés dans le périmètre concerné.",
          "Qualiopi ne signifie pas qu’une formation précise est automatiquement éligible au CPF, financée, ni que le candidat obtiendra une certification ou un emploi.",
        ],
      },
      {
        title: "Le numéro de déclaration d’activité",
        paragraphs: [
          "Le NDA doit figurer sur les conventions, contrats, devis ou factures de l’organisme. Service Public précise que ce numéro d’enregistrement ne constitue en aucun cas un agrément de l’organisme ou des formations qu’il dispense.",
        ],
      },
      {
        title: "Les six éléments à exiger avant de signer",
        bullets: [
          "L’intitulé exact et le code RNCP de la certification éventuellement préparée.",
          "Le statut actif de la fiche et sa date d’échéance.",
          "Le nom du certificateur et, si nécessaire, l’habilitation du centre préparateur.",
          "Les prérequis, la durée, les dates, le lieu et les modalités d’évaluation.",
          "Le résultat remis en cas de réussite et les conséquences d’un échec partiel ou total.",
          "Le prix, le financement confirmé et les conditions d’annulation.",
        ],
      },
    ],
    notice:
      "La certification effectivement visée par un parcours Compagnon de la Route est confirmée dans la fiche programme et les documents contractuels à jour, avant inscription.",
    sources: [
      {
        label: "France Compétences — RNCP37878",
        url: "https://www.francecompetences.fr/recherche/rncp/37878/",
        detail: "Fiche officielle du titre professionnel et période d’enregistrement.",
      },
      {
        label: "Ministère du Travail — Référentiel Qualiopi",
        url: "https://travail-emploi.gouv.fr/referentiel-national-qualite-guide-de-lecture-qualiopi",
        detail: "Périmètre de la certification qualité et financeurs concernés.",
      },
      {
        label: "Service Public Entreprendre — Déclaration d’activité",
        url: "https://entreprendre.service-public.gouv.fr/vosdroits/F19087",
        detail: "Portée du numéro de déclaration d’activité d’un organisme de formation.",
      },
    ],
    reviewedAt: "25 août 2026",
  },
} as const satisfies Record<string, VerifiedGuide>;

export const verifiedGuideList: readonly VerifiedGuide[] = Object.values(verifiedGuides);

export function verifiedGuideMetadata(guide: VerifiedGuide): Metadata {
  const canonical = `/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: guide.title,
      description: guide.description,
      url: canonical,
    },
  };
}
