# AI Handoff — 25 août 2026

## État

Vagues P0/P1/P2 implémentées localement sur `main`, non déployées et non poussées.

## Changements principaux

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

## Vérifications passées

- `npm run lint`
- `npm run build`
- `npm run test:e2e` — 8 tests passés
- `npm audit --omit=dev` — 0 vulnérabilité
- Lighthouse local production — performance 94, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 3,1 s, TBT 20 ms, CLS 0
- Lighthouse du guide certification — performance 96, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 2,8 s, TBT 40 ms, CLS 0
- Lighthouse du hub Guides avec neuf cartes — performance 96, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 2,8 s, TBT 20 ms, CLS 0
- Lighthouse du journal — performance 93, accessibilité 100, bonnes pratiques 100, SEO 100 ; LCP 3,2 s, TBT 10 ms, CLS 0
- Inspection visuelle du journal desktop et d’un article mobile ; aucun débordement horizontal après correction.

## Prochaines décisions métier

1. Valider la fiche programme réelle et les prochaines sessions.
2. Fournir les coordonnées publiques et les variables Resend.
3. Compléter directeur de publication, hébergeur et médiateur.
4. Relire individuellement les treize brouillons restants ; ne passer un fichier à `status: verified` qu’après suppression des promesses fragiles et ajout de sources officielles. Conserver la page Hauts-de-France en 404 tant qu’un lieu et des sessions locales ne sont pas confirmés.
5. Recueillir des témoignages avec consentement avant de réindexer la page dédiée.
6. Revalider les liens et références réglementaires des neuf guides lors de toute évolution du programme, et au plus tard avant le 7 juin 2028 pour RNCP37878.
