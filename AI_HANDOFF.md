# AI Handoff — 25 août 2026

## État

La refonte éditoriale anti-slop de l'ensemble du site public est terminée localement et attend son commit de livraison. Le déploiement de production n’a pas été vérifié dans ce dépôt.

Préférence de livraison du client : après validation, committer et pousser chaque intervention sur `origin/main`, sans inclure de secret.

## Changements principaux

- Hero de l'accueil entièrement reconstruit autour d'une photographie métier réelle : composition éditoriale en deux colonnes, titre court, CTA distincts et preuves réglementaires factuelles.
- Système visuel global nettoyé : Archivo et IBM Plex Mono remplacent Geist, fond quadrillé supprimé, halos et verre retirés, ombres et mouvements décoratifs supprimés, rayons réduits et hiérarchie portée par les bordures et l'espace.
- Seul le reveal narratif de la déclaration d'accueil est conservé. Le menu, le poids variable de la navigation et les accordéons ne bougent que pour signaler un état ou une action.
- Grille Bento conservée à la demande du client, mais reconstruite en composition plate et asymétrique, sans cartes flottantes ni promesse non vérifiée.
- Header et footer reconstruits en surfaces pleines largeur, sans conteneur flottant, verre, halo ou animation d'apparition.
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

## Vérifications passées

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
- Revue UI 21st de la page formation, de l'accordéon et de la timeline — 0 finding après correction.
- Inspection visuelle du header en haut de page, après scroll, au survol et avec le menu mobile ouvert ; axe `wght` vérifié de 430 à 720 et aucun débordement à 390 px.
- Revue UI 21st du header, du menu mobile et des composants VariableFontHover — 0 finding après correction.
- Inspection visuelle du footer à 1440 px et 390 px, avec et sans animation ; quatre colonnes présentes, reveal 0→1 confirmé et aucun débordement horizontal.
- Inspection visuelle du nouvel index Journal à 1440 px et de l’article pilier à 390 px ; six cartes présentes et aucun débordement horizontal.
- Revue UI 21st du Journal : avertissement de zoom d’image corrigé ; les largeurs maximales signalées sont des conteneurs responsive déjà bornés par `section-shell` et non des débordements effectifs.

## Prochaines décisions métier

1. Valider la fiche programme réelle et les prochaines sessions.
2. Fournir les coordonnées publiques et les variables Resend.
3. Compléter directeur de publication, hébergeur et médiateur.
4. Relire individuellement les dix brouillons restants ; ne passer un fichier à `status: verified` qu’après suppression des promesses fragiles et ajout de sources officielles. Conserver la page Hauts-de-France en 404 tant qu’un lieu et des sessions locales ne sont pas confirmés.
5. Recueillir des témoignages avec consentement avant de réindexer la page dédiée.
6. Revalider les liens et références réglementaires des neuf guides lors de toute évolution du programme, et au plus tard avant le 7 juin 2028 pour RNCP37878.
