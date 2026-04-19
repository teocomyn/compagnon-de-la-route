#!/usr/bin/env bash
# Télécharge des visuels Unsplash (licence Unsplash) pour les articles du journal.
# Usage : depuis la racine du projet : bash scripts/fetch-article-images.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public"
BASE="https://images.unsplash.com"

dl() {
  local id="$1" dest="$2"
  curl -fsSL "${BASE}/photo-${id}?w=1600&q=82&auto=format&fit=crop" -o "$dest"
  echo "OK $dest"
}

# 10 articles × 3 (cover, inline-1, inline-2) — IDs uniques par fichier
# devenir-conducteur-bus-guide-complet
dl "1544620347-c4fd4a3d5957" "$PUBLIC/images/articles/devenir-conducteur-bus-guide-complet/cover.jpg"
dl "1570125909232-eb263c188f7e" "$PUBLIC/images/articles/devenir-conducteur-bus-guide-complet/inline-1.jpg"
dl "1449965408869-eaa3f722e40d" "$PUBLIC/images/articles/devenir-conducteur-bus-guide-complet/inline-2.jpg"

# permis-d-fimo-fco-differences
dl "1450101499163-c8848c66ca85" "$PUBLIC/images/articles/permis-d-fimo-fco-differences/cover.jpg"
dl "1460925895917-afdab827c52f" "$PUBLIC/images/articles/permis-d-fimo-fco-differences/inline-1.jpg"
dl "1551288049-bebda4e38f71" "$PUBLIC/images/articles/permis-d-fimo-fco-differences/inline-2.jpg"

# salaire-conducteur-bus-2026
dl "1554224155-6726b3ff858f" "$PUBLIC/images/articles/salaire-conducteur-bus-2026/cover.jpg"
dl "1454165804606-c3d57bc86b40" "$PUBLIC/images/articles/salaire-conducteur-bus-2026/inline-1.jpg"
dl "1503387762-592deb58ef4e" "$PUBLIC/images/articles/salaire-conducteur-bus-2026/inline-2.jpg"

# reconversion-conducteur-bus
dl "1521737711867-e3b97375f902" "$PUBLIC/images/articles/reconversion-conducteur-bus/cover.jpg"
dl "1522071820081-009f0129c71c" "$PUBLIC/images/articles/reconversion-conducteur-bus/inline-1.jpg"
dl "1552664730-d307ca884978" "$PUBLIC/images/articles/reconversion-conducteur-bus/inline-2.jpg"

# financer-formation-conducteur-bus
dl "1519389950473-47ba0277781c" "$PUBLIC/images/articles/financer-formation-conducteur-bus/cover.jpg"
dl "1563986768609-322da13575f3" "$PUBLIC/images/articles/financer-formation-conducteur-bus/inline-1.jpg"
dl "1504384308090-c894fdcc538d" "$PUBLIC/images/articles/financer-formation-conducteur-bus/inline-2.jpg"

# conducteur-bus-scolaire-metier
dl "1558618666-fcd25c85cd64" "$PUBLIC/images/articles/conducteur-bus-scolaire-metier/cover.jpg"
dl "1529156069898-49953e39b3ac" "$PUBLIC/images/articles/conducteur-bus-scolaire-metier/inline-1.jpg"
dl "1531482615713-2afd69097998" "$PUBLIC/images/articles/conducteur-bus-scolaire-metier/inline-2.jpg"

# conducteur-car-tourisme-metier
dl "1565610222536-ef125c59da2e" "$PUBLIC/images/articles/conducteur-car-tourisme-metier/cover.jpg"
dl "1516738901171-8eb4fc13bd20" "$PUBLIC/images/articles/conducteur-car-tourisme-metier/inline-1.jpg"
dl "1497366216548-37526070297c" "$PUBLIC/images/articles/conducteur-car-tourisme-metier/inline-2.jpg"

# evolutions-carriere-conducteur-bus
dl "1507679799987-c73779587ccf" "$PUBLIC/images/articles/evolutions-carriere-conducteur-bus/cover.jpg"
dl "1521791136064-7986c2920216" "$PUBLIC/images/articles/evolutions-carriere-conducteur-bus/inline-1.jpg"
dl "1522202176988-66273c2fd55f" "$PUBLIC/images/articles/evolutions-carriere-conducteur-bus/inline-2.jpg"

# formation-conducteur-bus-hauts-de-france
dl "1586528116311-ad8dd3c8310d" "$PUBLIC/images/articles/formation-conducteur-bus-hauts-de-france/cover.jpg"
dl "1502602898657-3e91760cbb34" "$PUBLIC/images/articles/formation-conducteur-bus-hauts-de-france/inline-1.jpg"
dl "1517248135467-4c7edcad34c4" "$PUBLIC/images/articles/formation-conducteur-bus-hauts-de-france/inline-2.jpg"

# journee-type-conducteur-bus
dl "1511632765486-a01980e01a18" "$PUBLIC/images/articles/journee-type-conducteur-bus/cover.jpg"
dl "1514933651103-005eec06c04b" "$PUBLIC/images/articles/journee-type-conducteur-bus/inline-1.jpg"
dl "1486406146926-c627a92ad1ab" "$PUBLIC/images/articles/journee-type-conducteur-bus/inline-2.jpg"

# Vignettes /images/blog/ (4 articles plus anciens)
dl "1556761175-b413da4baf72" "$PUBLIC/images/blog/bus-30.jpg"
dl "1560472354-b33ff0c44a43" "$PUBLIC/images/blog/avenir.jpg"
dl "1560250097-0b93528c311a" "$PUBLIC/images/blog/entretien.jpg"
dl "1553877522-43269d4ea984" "$PUBLIC/images/blog/finance.jpg"

echo "Terminé."
