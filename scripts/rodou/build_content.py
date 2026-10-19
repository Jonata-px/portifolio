# -*- coding: utf-8 -*-
# Gera src/pages/Rodou/content.json a partir de content_a.py + content_b.py.
# Uso: python scripts/rodou/build_content.py
import json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from content_a import C as A
from content_b import C as B

ORDER = ["pt", "en", "es", "fr", "de", "it", "tr", "pl", "id", "vi"]
PLAY_HL = {"pt": "pt_BR", "en": "en_US", "es": "es_419", "fr": "fr", "de": "de", "it": "it", "tr": "tr", "pl": "pl", "id": "id", "vi": "vi"}

merged = {**A, **B}
out = {}
for k in ORDER:
    v = merged[k]
    v["playHl"] = PLAY_HL[k]
    assert len(v["features"]["items"]) == 8, k
    assert len(v["faq"]["items"]) == 5, k
    assert len(v["screens"]["alts"]) == 6, k
    assert len(v["steps"]["items"]) == 3, k
    assert len(v["title"]) <= 70, (k, len(v["title"]))
    assert len(v["description"]) <= 175, (k, len(v["description"]))
    out[k] = v

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "src", "pages", "Rodou", "content.json")
with open(os.path.normpath(root), "w", encoding="utf-8") as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
print("ok", {k: (len(out[k]["title"]), len(out[k]["description"])) for k in ORDER})
