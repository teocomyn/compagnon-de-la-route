# AI Handoff — 26 août 2026

## État

La refonte éditoriale anti-slop, l'architecture de marque, le second parcours métier et l'identité de partage sont poussés sur `main`, dernière livraison fonctionnelle `87c6d35`. Compagnon de la Route est présenté comme le label transport porté par BOAZ ; l'accueil et le catalogue distinguent conduite et exploitation-régulation.

Préférence de livraison du client : après validation, committer et pousser chaque intervention sur `origin/main`, sans inclure de secret.

## Changements principaux

- Hero de l'accueil conservé dans sa direction photographique validée, mais élargi au label entier : eyebrow BOAZ, proposition de valeur commune aux deux métiers, CTA vers `/formations` et ruban conduite / exploitation-régulation / service.
- Nouvelle section `Pathways` immédiatement après la ligne de réseau : deux grandes lignes éditoriales « à bord » et « à l'exploitation », chacune avec verbes métier, statut public et lien direct. L'ancienne section `WhyBecome`, générique et exclusivement centrée sur le conducteur, n'est plus rendue sur l'accueil.
- Section méthode réécrite autour de quatre réalités : candidat, métier, entreprise lorsqu'elle est associée, et BOAZ. Le wording ne suppose pas qu'un employeur est déjà engagé sur chaque parcours.
- Catalogue `/formations` reconstruit autour de deux panneaux métier complémentaires : conducteur de voyageurs « à bord » et exploitant-régulateur « à l'exploitation ». Chaque panneau affiche son statut réel ; le second reste explicitement en préparation.
- Nouvelle route `/formations/exploitant-regulateur` : missions de planification, affectation, régulation et analyse, réalités du poste, six modalités à confirmer et liens directs vers France Compétences RNCP39792, France Travail et Onisep. Aucun schéma `Course` n'est publié tant que la formation BOAZ et la certification effectivement préparée ne sont pas confirmées.
- Garde-fou durable ajouté : ne pas publier les 400 heures, la session du 1er novembre 2026, le financement à 100 %, les 600 postes non pourvus ou le calendrier de validation évoqués oralement sans fiche programme et preuves écrites.
- Architecture de marque corrigée dans les contenus et le SEO : BOAZ est l'organisme de formation et Compagnon de la Route son label transport. Le schéma racine expose un `EducationalOrganization` BOAZ relié à une `Brand` Compagnon de la Route ; les schémas `Course`, `Article` et `AboutPage` réutilisent la même identité.
- Nouvelle page `/le-label` en composition éditoriale plate : articulation visuelle label → organisme, socle de responsabilité, photographie métier et distinction explicite entre Compagnon de la Route, BOAZ et Qualiopi. La page ne présente ni le label comme une certification, ni Qualiopi comme une garantie de financement, de diplôme ou d'emploi.
- Navigation desktop et mobile enrichie avec « Le label » et « BOAZ » ; footer, README, `llms.txt`, sitemap et page organisme alignés sur la même architecture.
- Hero de l'accueil reconstruit avec un slider plein cadre des quatre photographies fournies par le client : route nocturne, autocar en montagne, conducteur au poste et bus urbain en mouvement. Le contact-sheet initial a été retiré à la demande du client. Sur mobile, le slider devient l'arrière-plan d'un écran unique : titre, bénéfice, CTA principal et preuves apparaissent immédiatement, avec des commandes compactes ancrées en bas. Les petits écrans conservent prioritairement le CTA de parcours ; la composition desktop reste en deux colonnes. Le slider accepte autoplay, pause, survol, focus, flèches, clavier et swipe ; il devient manuel avec `prefers-reduced-motion` et ne produit aucun écart d'hydratation.
- Ligne de réseau ajoutée immédiatement sous le hero avec les logos fournis de la Fédération Française des Geiq, BPV Objectifs et Geiq Mobilité. Le défilement CSS continu se suspend au survol et devient une grille statique sous `prefers-reduced-motion`, sans ajouter de JavaScript client.
- Système visuel global nettoyé : Archivo et IBM Plex Mono remplacent Geist, fond quadrillé supprimé, halos et verre retirés, ombres et mouvements décoratifs supprimés, rayons réduits et hiérarchie portée par les bordures et l'espace.
- Seul le reveal narratif de la déclaration d'accueil est conservé. Le menu, le poids variable de la navigation et les accordéons ne bougent que pour signaler un état ou une action.
- Grille Bento conservée à la demande du client, mais reconstruite en composition plate et asymétrique, sans cartes flottantes ni promesse non vérifiée.
- Transition d'accueil resserrée : titre en grille éditoriale correctement contenu par `section-shell`, texte toujours visible et nouveau triptyque Bento placé directement sous la déclaration. Les panneaux représentent le parcours, l'entraînement au poste et les informations à confirmer avant inscription.
- Header reconstruit en surface pleine largeur et footer sans verre, halo ni animation d'apparition.
- Footer final renforcé en arche de marque : CTA monumental, trois repères de parcours, navigation complète et signature typographique sur deux niveaux. Le grand arrondi est limité à la silhouette extérieure et le composant reste rendu côté serveur.
- Composant `BorderBeamPanel` ajouté dans `src/components/ui` et appliqué uniquement au Bento central, au panneau des données d'activité et au formulaire de contact. Deux faisceaux orange et crème orbitent lentement, accélèrent au survol, se suspendent hors écran et restent statiques sous `prefers-reduced-motion`.
- Bloc des données d'activité reconstruit comme une fiche de preuve : en-tête de registre, trois colonnes numérotées avec pictogrammes, source intégrée et bordure orbitale commune. Les valeurs et précautions éditoriales restent inchangées.
- Section pédagogique de l'accueil reconstruite autour de « Faire, observer, recommencer » : photographie métier fournie, légende de mise en situation et quatre temps numérotés disposés comme une progression éditoriale, sans carte décorative ni nouvelle animation.
- Pages formation, à propos, contact, formations, guides, journal, témoignages, articles et pages légales harmonisées avec la direction éditoriale.
- Ancienne page SEO générique refondue avec les mêmes primitives plates, même si sa publication reste suspendue par le garde-fou éditorial.
- Anciens composants visuels inutilisés `GridBackground`, `OrangeGlow`, `GlassCard`, `FooterReveal` et `PrereqImmersive` supprimés pour éviter leur réintroduction.

- Accueil raccourci et allégé ; suppression des blocs lourds et des promesses non sourcées.
- Parcours conducteur réécrit sans durée, calendrier, places ou financement fictifs.
- Données légales de BOAZ centralisées et réutilisées en SEO, contact et mentions légales.
- Formulaire relié à l'API Resend, avec validation serveur, champ anti-robot et erreurs réelles.
- Pages mentions légales, confidentialité, RGPD et socle CGV complétées.
- Témoignages non vérifiés retirés ; anciens articles non vérifiés maintenus hors publication.
- Footer remplacé par une version serveur plus légère.
- Next.js mis à jour vers 16.3.2 ; dépendances inutiles retirées ; audit à zéro vulnérabilité.
- Workflow GitHub Actions ajouté pour lint, build et tests Playwright.
- CSP, HSTS, anti-clickjacking, politique de permissions et autres en-têtes de sécurité ajoutés.
- Taille des Server Actions limitée à 32 Ko ; activation Resend rendue explicitement opt-in.
- Téléphone du formulaire rendu facultatif selon le principe de minimisation des données.
- Guides SEO fermés par défaut comme le journal ; sitemap et `llms.txt` assainis.
- Profils d'équipe non documentés retirés de la publication.
- Pages d'erreur applicative et globale ajoutées.
- Héros et sections principales rendus côté serveur pour réduire le JavaScript et afficher immédiatement le contenu.
- Trois guides evergreen réécrits et publiés avec sources officielles : financement, métier/débouchés et contrôle des certifications.
- Trois guides réglementaires supplémentaires publiés : permis D, FIMO/FCO et FAQ conducteur.
- Trois guides métier supplémentaires publiés : autocar/tourisme, transport scolaire et préparation au recrutement.
- Hub `/guides` ajouté à la navigation principale pour regrouper les neuf ressources vérifiées.
- Fil d’Ariane des guides enrichi avec un passage systématique par le hub.
- Guides ajoutés au footer, au sitemap et à `llms.txt` ; seule la page régionale Hauts-de-France reste fermée parmi les pages piliers.
- Distinction explicitée entre RNCP, Qualiopi et numéro de déclaration d’activité ; aucune promesse de financement ou d’emploi.
- Journal rouvert de façon sélective avec trois articles relus et sourcés : prise de service, choix d’une formation et entretien d’embauche.
- Garde-fou éditorial ajouté : un article exige `status: verified`, une date de relecture et des sources ; `dynamicParams=false` maintient tous les autres slugs en 404.
- Journal ajouté à la navigation, au footer, au sitemap et à `llms.txt` ; Article JSON-LD enrichi avec les citations officielles.
- Index du journal rendu entièrement côté serveur ; ancien filtre client et ses catégories obsolètes supprimés.
- En-tête d’article corrigé sous 768 px pour supprimer le débordement causé par le ratio panoramique.
- Contraste et hiérarchie des titres des cartes corrigés ; première image préchargée sur l’index pour le LCP.
- Déclaration de l'accueil raccourcie en deux phrases et animée par un reveal vertical ligne par ligne, avec désactivation automatique si l'utilisateur préfère réduire les mouvements.
- Section Bento asymétrique restaurée après les chiffres d'activité : étapes du parcours, cadre écrit, compétences, financement, repères légaux et accompagnement vers l'emploi, sans réintroduire les anciens chiffres ou partenaires non sourcés.
- Deux garde-fous Playwright ajoutés pour contrôler le contenu, l'affichage réel du reveal et l'absence de débordement horizontal du Bento sur mobile.
- Contexte de design 21st initialisé et décision visuelle durable enregistrée dans `.21st/design.json`.
- Page `/formations/conducteur-voyageurs` entièrement refondue en landing page éditoriale : hero asymétrique, sommaire d'ancrage, piliers métier, récit photographique, parcours, programme, modalités, financement, débouchés et CTA final.
- Deux photographies fournies par le client intégrées via imports statiques `next/image`, avec dimensions intrinsèques, placeholder flouté, `sizes` responsive et priorité limitée à l'image du hero.
- Programme accordéon et timeline redessinés ; animations adaptées à `prefers-reduced-motion` et page maintenue majoritairement côté serveur.
- Anciennes promesses du contenu source non reprises : pas de parcours de 30 jours, d'emploi ou de débouchés garantis, de financement automatique, de taux terrain ni de distinctions non vérifiées.
- Header global reconstruit en barre flottante : identité de marque enrichie, état actif par route, CTA direct vers le parcours et transition d'opacité au scroll.
- Composants `VariableFontHover` et `m-variable-font-hover-1` ajoutés dans `src/components/ui` ; Geist Sans est désormais chargé dans sa version variable pour animer réellement l'axe `wght`.
- Menu mobile reconstruit en panneau modal sous le header : focus initial, boucle de tabulation, fermeture par Échap, verrouillage du scroll, CTA et mention Qualiopi.
- Footer global entièrement reconstruit en conclusion de marque premium : halo supérieur, CTA contact/parcours, navigation complète, repères BOAZ/Qualiopi vérifiés et signature typographique XXL.
- Le footer principal reste un Server Component ; `FooterReveal` constitue la seule frontière client et utilise `motion-safe` pour éviter un écart d'hydratation avec `prefers-reduced-motion`.
- Un garde-fou Playwright contrôle le CTA, la navigation et l'absence de débordement horizontal du footer à 390 px.
- Journal porté à six dossiers longs et vérifiés, d’environ 1 700 à 2 100 mots chacun : orientation, financement, métier, choix de formation, entretien et prise de service.
- Quatre photographies métier fournies par le client intégrées dans `public/images/journal`, avec textes alternatifs descriptifs et chargement prioritaire limité aux visuels visibles au-dessus de la ligne de flottaison.
- SEO du Journal renforcé : mots-clés ciblés, métadonnées Open Graph/Twitter, schémas `Article` et `CollectionPage`/`ItemList`, sources officielles, FAQ éditoriales, maillage interne et sitemap dynamique limité aux articles vérifiés.
- Promesses fragiles écartées des articles : aucune durée universelle de 30 jours, aucun financement automatique, aucun « zéro chômage » ni emploi garanti.
- Formulaire de contact qualifié livré dans le commit `814832f` : segmentation par profil (candidat, entreprise, partenaire, autre), projet (conducteur, exploitant-régulateur, recrutement, partenariat, autre) et organisation lorsque nécessaire.
- Les liens de parcours peuvent préremplir le projet via `/contact?projet=...` ; la validation serveur contrôle les valeurs autorisées et le message Resend expose des champs structurés prêts pour un futur routage CRM, sans envoyer de données à un service supplémentaire.
- Politique de confidentialité alignée sur ces nouvelles données de qualification et garde-fou Playwright ajouté pour le préremplissage Exploitant-régulateur.
- Garde-fous de lancement livrés dans le commit `d338952` : manifeste web, titre global élargi aux formations transport, sitemap hiérarchisé sans date artificielle de build et dates d'articles issues de leurs métadonnées vérifiées.
- Mentions légales et CGV débarrassées des consignes internes visibles. Les informations de publication, d'hébergement et de médiation proviennent désormais uniquement de variables serveur ; les deux pages restent accessibles mais en `noindex` et hors sitemap tant que ces données ne sont pas complètes.
- Commande `npm run check:launch` ajoutée. Elle contrôle sans afficher les secrets : domaine HTTPS, coordonnées publiques, configuration Resend, directeur de publication, hébergeur et médiateur de la consommation.
- Domaine de production connecté dans le commit `38eb7a9` : `compagnondelaroute.com` devient l'URL canonique du code et de l'environnement Vercel Production ; `www.compagnondelaroute.com` redirige définitivement vers le domaine nu.
- Le domaine et sa variante `www` sont rattachés au projet Vercel `t4c2s-projects/compagnon-de-la-route`. La zone DNS Hostinger conserve ses serveurs de noms et l'enregistrement `A @` pointe vers `76.76.21.21`. Le jeton Hostinger utilisé ponctuellement n'a été écrit dans aucun fichier, variable Vercel ou commit.
- Playwright utilise désormais le port local dédié 3101 afin de ne jamais réutiliser par erreur un autre projet présent sur le port 3000.
- Identité de partage livrée dans `87c6d35` : favicon ICO multi-résolution, icône Next.js 512 × 512, icône Apple 180 × 180 et carte Open Graph 1200 × 630 composés à partir du monogramme client et d'une photographie métier existante.
- Les métadonnées racine, accueil, label et deux pages métier pointent vers la même carte versionnée. Le script reproductible `npm run assets:brand` évite toute redessine approximative du logo ; un garde-fou Playwright contrôle dimensions déclarées, balises Open Graph/Twitter et disponibilité des quatre assets.

## Vérifications passées

- Contact qualifié inspecté à 1440 × 1100 et 390 × 844 avec le projet Exploitant-régulateur prérempli ; formulaire, consentement et footer lisibles sans débordement horizontal.
- Revue UI 21st du formulaire et de la page contact — 0 finding.
- `npm run test:e2e` — 15 tests passés sur le port 3101 ; le port 3000 était occupé par un autre projet local et n'a pas été interrompu.
- `npm run lint`, `npm run build` et `npm audit --omit=dev` — passés, 0 vulnérabilité de production.
- Passe de lancement : `npm run lint` et `npm run build` passés ; `npm run test:e2e` — 16 tests passés ; `npm audit --omit=dev` — 0 vulnérabilité. `npm run check:launch` refuse correctement le feu vert avec la configuration locale incomplète.
- Domaine public vérifié après déploiement : HTTPS 200, HSTS et CSP présents, redirection `www` 308, canonical et Open Graph en `.com`, sitemap en `.com`, deux serveurs DNS autoritatifs sur `76.76.21.21` et 16 tests Playwright passés directement sur `https://compagnondelaroute.com`.
- Passe locale de l'identité de partage : `npm run lint`, `npm run build` et 17 tests Playwright passés ; `npm audit --omit=dev` retourne 0 vulnérabilité de production.
- Accueil réaligné inspecté à 1440 × 1000 et 390 × 844 : hero, premier viewport mobile, ligne de réseau et sélecteur des deux métiers lisibles sans débordement horizontal.
- Revue UI 21st de `Hero`, `Pathways`, `TrustBuilding` et de la page d'accueil — 0 finding.
- Catalogue et page Exploitant-régulateur inspectés à 1440 × 1000 et 390 × 844 : statuts, appels à l'action, sources et réserves lisibles sans débordement horizontal.
- Revue UI 21st du catalogue et de la page Exploitant-régulateur — 0 finding.
- `npm run test:e2e` — 15 tests passés, dont le garde-fou mobile Exploitant-régulateur et la publication de la route dans le sitemap.
- Page `/le-label` inspectée à 1440 × 1100, 1280 × 900 et 390 × 844 : hiérarchie, navigation, schéma label → BOAZ et footer lisibles sans débordement horizontal.
- Revue UI 21st de la page label, du header, du menu mobile et du footer — 0 finding.
- `npm run test:e2e` — 14 tests passés, dont le garde-fou d'architecture de marque et la présence de `/le-label` dans le sitemap.
- Audit visuel anti-slop de l'ensemble des routes publiques et de la page SEO suspendue.
- Revue UI 21st sur 62 fichiers : 0 erreur, 0 avertissement, 0 suggestion.
- Inspection Playwright à 1440 px et 390 px : hero, reveal, menu mobile, formation, contact et article ; aucun débordement horizontal.
- Reveal de l'accueil vérifié après scroll avec une opacité finale de 1 ; menu mobile visible, piégeage du focus couvert par les tests.
- `npm run lint`
- `npm run build`
- `npm run test:e2e` — 12 tests passés
- `npm audit --omit=dev` — 0 vulnérabilité
- Lighthouse local production — performance 94, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 3,1 s, TBT 20 ms, CLS 0
- Lighthouse du guide certification — performance 96, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 2,8 s, TBT 40 ms, CLS 0
- Lighthouse du hub Guides avec neuf cartes — performance 96, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 2,8 s, TBT 20 ms, CLS 0
- Lighthouse du journal — performance 93, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 3,2 s, TBT 10 ms, CLS 0
- Inspection visuelle du journal desktop et d’un article mobile ; aucun débordement horizontal après correction.
- Inspection visuelle de la déclaration et du Bento sur desktop et mobile ; reveal corrigé après détection d'un déclencheur masqué.
- Revue UI 21st sur les trois fichiers de la home — 0 finding après correction.
- Inspection visuelle complète de la page formation à 1440 px et 390 px ; aucun débordement horizontal, hero et sections photographiques validés.
- Inspection visuelle de la ligne de réseau à 1440 px et 390 px, avec mouvement normal et réduit ; trois logos lisibles, pause au survol et aucun débordement horizontal.
- Inspection visuelle du slider hero à 1440 px et 390 px sur les deux premières images ; autoplay, pause au survol, boutons, clavier et réduction des animations vérifiés, sans débordement horizontal ni erreur d'hydratation.
- Inspection visuelle de la hero mobile à 375 × 667, 390 × 844 et 430 × 932 sur les quatre photographies ; message et CTA principal visibles dans le premier viewport, contraste lisible, commandes accessibles et aucun débordement horizontal.
- Calibre typographique mobile du hero réduit après retour client : titre mesuré entre 129 et 158 px de hauteur sur les viewports contrôlés, photographie davantage visible et CTA toujours présent dans le premier écran.
- Inspection visuelle de la section pédagogique à 1440 px et 390 px ; photographie, progression numérotée et raccord avec la section suivante validés sans débordement horizontal.
- Revue UI 21st de `Hero` et `HeroSlider` — 0 finding.
- `npm run test:e2e` — 13 tests passés après ajout du garde-fou mobile sur le premier viewport.
- Inspection visuelle du panneau d'activité à 1440 px et 390 px ; trois données, source et bordure orbitale lisibles sans débordement horizontal.
- Revue UI 21st de la page formation, de l'accordéon et de la timeline — 0 finding après correction.
- Inspection visuelle du header en haut de page, après scroll, au survol et avec le menu mobile ouvert ; axe `wght` vérifié de 430 à 720 et aucun débordement à 390 px.
- Revue UI 21st du header, du menu mobile et des composants VariableFontHover — 0 finding après correction.
- Inspection visuelle du footer à 1440 px et 390 px, avec et sans animation ; quatre colonnes présentes, reveal 0→1 confirmé et aucun débordement horizontal.
- Inspection visuelle du nouvel index Journal à 1440 px et de l’article pilier à 390 px ; six cartes présentes et aucun débordement horizontal.
- Revue UI 21st du Journal : avertissement de zoom d’image corrigé ; les largeurs maximales signalées sont des conteneurs responsive déjà bornés par `section-shell` et non des débordements effectifs.

## Prochaines décisions métier

1. Documenter puis publier le parcours Exploitant-régulateur sans reprendre les durées, financements, volumes d'emploi ou dates évoqués oralement tant qu'une fiche programme officielle n'est pas disponible.
2. Valider la fiche programme réelle et les prochaines sessions du parcours conducteur.
3. Fournir les coordonnées publiques et les variables Resend.
4. Compléter directeur de publication, hébergeur et médiateur.
5. Relire individuellement les dix brouillons restants ; ne passer un fichier à `status: verified` qu’après suppression des promesses fragiles et ajout de sources officielles. Conserver la page Hauts-de-France en 404 tant qu’un lieu et des sessions locales ne sont pas confirmés.
6. Recueillir des témoignages avec consentement avant de réindexer la page dédiée.
7. Revalider les liens et références réglementaires des neuf guides lors de toute évolution du programme, et au plus tard avant le 7 juin 2028 pour RNCP37878.
