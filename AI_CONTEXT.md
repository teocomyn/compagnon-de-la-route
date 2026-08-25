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
- Trois articles sourcés et relus au 25 août 2026 sont publics : prise de service, choix d’une formation et entretien d’embauche. Les treize autres fichiers MDX restent des brouillons fermés.
- Neuf guides statiques, sourcés et relus au 25 août 2026 sont publiés hors de ce drapeau : financement, métier/débouchés, certifications, permis D, FIMO/FCO, FAQ, tourisme, transport scolaire et candidature.
- Les guides publics sont rendus côté serveur depuis `src/lib/verified-guides.ts` et renvoient vers Service Public, France Travail, France Compétences, le ministère du Travail et l’Onisep selon le sujet.
- Les routes `/guides` et `/journal` sont accessibles depuis la navigation principale et ne listent que les ressources publiques.
- La page régionale Hauts-de-France reste suspendue tant qu’aucun lieu réel ni aucune session locale ne sont confirmés.
- Les témoignages génériques et les agrégats non documentés ne sont plus publiés.
- Le formulaire utilise une Server Action et Resend uniquement si `CONTACT_FORM_MODE=resend` et toutes les variables serveur sont configurées.
- Les pages reçoivent une CSP et des en-têtes de sécurité depuis `next.config.ts` ; le formulaire est limité à 32 Ko.
- Les profils d'équipe, partenaires et distinctions ne sont pas publiés sans éléments vérifiables et droits d'utilisation.

## Configuration

Copier `.env.example` vers un fichier d'environnement local et renseigner les valeurs nécessaires. Ne jamais committer de clé API.

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
