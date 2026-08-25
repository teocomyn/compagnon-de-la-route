# AI Context — Compagnon de la Route

## Objectif

Site public de BOAZ pour présenter un parcours de préparation aux métiers du transport de voyageurs et générer des demandes de contact qualifiées.

## Stack

- Next.js 16.3.2, App Router, React 19, TypeScript strict
- Tailwind CSS 4 et Framer Motion
- Playwright pour les parcours critiques
- Déploiement non défini dans le dépôt

## Source de vérité publique

Les informations d'organisme sont centralisées dans `src/lib/constants.ts` :

- BOAZ (LES COMPAGNONS DE LA ROUTE)
- SIREN 929 379 758
- SIRET 929 379 758 00022
- NDA 94 20 21469 20, région Corse
- Certification Qualiopi : actions de formation
- Adresse déclarée : Tiuccia, Strada di u Melu, 20111 Casaglione

Les chiffres de réussite, d'insertion, de satisfaction, de durée ou de financement ne doivent pas être publiés sans source, période, périmètre et méthode de calcul.

## Règles produit actuelles

- La durée, le calendrier, les prérequis, la certification visée et le financement sont confirmés avant inscription.
- Le site ne garantit ni financement, ni certification, ni emploi.
- Le journal applique une publication sélective dans `src/lib/articles.ts` : seuls les fichiers portant `status: verified`, une date de relecture et au moins une source sont générés. Une variable d’environnement ne peut pas ouvrir tous les brouillons.
- Six articles longs, sourcés et relus au 25 août 2026 sont publics : devenir conducteur, financement, métier et débouchés, choix d’une formation, entretien d’embauche et prise de service. Les dix autres fichiers MDX restent des brouillons fermés.
- Neuf guides statiques, sourcés et relus au 25 août 2026 sont publiés hors de ce drapeau : financement, métier/débouchés, certifications, permis D, FIMO/FCO, FAQ, tourisme, transport scolaire et candidature.
- Les guides publics sont rendus côté serveur depuis `src/lib/verified-guides.ts` et renvoient vers Service Public, France Travail, France Compétences, le ministère du Travail et l’Onisep selon le sujet.
- Les routes `/guides` et `/journal` sont accessibles depuis la navigation principale et ne listent que les ressources publiques.
- La page régionale Hauts-de-France reste suspendue tant qu’aucun lieu réel ni aucune session locale ne sont confirmés.
- Les témoignages génériques et les agrégats non documentés ne sont plus publiés.
- La direction visuelle suit un système éditorial transport : Archivo, IBM Plex Mono, aplats vert nuit et orange, bordures franches, photographie métier réelle et très peu d'arrondis. Éviter les halos, fonds quadrillés, surfaces en verre, ombres décoratives, cartes interchangeables et animations de scroll répétées.
- Le hero de l'accueil utilise la photographie réelle `public/images/journal/conductrice-bus-poste.jpg`, un titre orienté préparation au poste et deux CTA explicites. La preuve réglementaire reste factuelle et aucune promesse d'emploi, de financement ou de délai n'est ajoutée.
- L'accueil conserve une seule déclaration courte révélée ligne par ligne et une grille Bento asymétrique plate. Le reveal respecte `prefers-reduced-motion`, affiche réellement le contenu au scroll et constitue la seule animation narrative globale.
- La page `/formations/conducteur-voyageurs` suit la même direction éditoriale, avec photographies métier fournies par le client, hero asymétrique, parcours linéaire et programme accordéon. Les images sont cadrées sans masque décoratif et servies par `next/image`.
- Le header global est une barre fixe et plate. La navigation desktop utilise `VariableFontHover` avec Archivo chargé comme fonte variable ; l'état actif est orange. Le menu mobile est modal, piège le focus, se ferme avec Échap et conserve le CTA vers le parcours conducteur.
- Le footer global est une conclusion éditoriale pleine largeur : CTA orange, navigation réelle, données BOAZ et Qualiopi vérifiées, puis signature typographique statique. Il ne comporte ni halo, ni verre, ni reveal décoratif.
- Le Journal forme un cluster SEO de six dossiers couvrant tout le parcours de décision. Les quatre photographies métier fournies par le client sont intégrées aux cartes et aux contenus ; l’index expose une `CollectionPage`/`ItemList`, chaque article un schéma `Article`, et le sitemap est dérivé dynamiquement des seuls contenus vérifiés.
- Le formulaire utilise une Server Action et Resend uniquement si `CONTACT_FORM_MODE=resend` et toutes les variables serveur sont configurées.
- Les pages reçoivent une CSP et des en-têtes de sécurité depuis `next.config.ts` ; le formulaire est limité à 32 Ko.
- Les profils d'équipe, partenaires et distinctions ne sont pas publiés sans éléments vérifiables et droits d'utilisation.

## Configuration

Copier `.env.example` vers un fichier d'environnement local et renseigner les valeurs nécessaires. Ne jamais committer de clé API.

## Livraison

- Après validation d’une livraison demandée, committer puis pousser les changements sur `origin/main` du dépôt `teocomyn/compagnon-de-la-route`.
- Ne jamais inclure de secret ou de fichier d’environnement dans un commit.

## Vérifications

```bash
npm run lint
npm run build
npm run test:e2e
npm audit --omit=dev
```

## Points à confirmer avant mise en production

- Directeur de la publication nominatif
- Hébergeur de production et ses coordonnées légales
- E-mail, téléphone et domaine publics réellement opérationnels
- Fiche programme contractuelle : durée, lieux, calendrier, prérequis, certification et prix
- Médiateur de la consommation si vente à des particuliers
- Identité, fonction, accord de publication et droits photo pour toute future page équipe
