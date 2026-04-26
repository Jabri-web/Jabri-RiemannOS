# Jabri-RiemannOS: Lambda from Riemann Zeros
   [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19717561.svg)](https://doi.org/10.5281/zenodo.19717561)
   [![H0-Tension](https://img.shields.io/badge/H0--Tension-Solved-brightgreen)]()
   [![Free-Parameters](https://img.shields.io/badge/Free_Parameters-0-blue)]()
[[Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jabri62018/Jabri-RiemannOS/blob/main/Zx_Jabri.ipynb)

**DOI:** [10.5281/zenodo.19717561](https://doi.org/10.5281/zenodo.19717561)

**No free parameters. No fitting. Only input: zeros of ζ(s).**

---

### Repository Contents

| File | Description |
| --- | --- |
| `Z_total_v1.pdf` | Main paper v1.0 submitted to arXiv hep-th |
| `Z_total_v1.tex` | LaTeX source of the paper |
| `Zx_Jabri_Universe.png` | **Figure 1**: Evolution of Z(x) from Big Bang to present |
| `Z_zeros.png` | Distribution of first Riemann zeros used |
| `Z_t01.png` | Supporting plot: V'' > 0 during inflation |
| `Zx_Jabri.ipynb` | Python code to reproduce Figure 1 from scratch |

---

### Reproduce Figure 1 in 15 Seconds

1. Click the `Open in Colab` badge above
2. Run all cells: `Runtime` → `Run all`
3. Output: `Zx_Jabri_Universe.png` + values `Z(12)=1.200000`, `Z(phi)=-0.034952`

**Dependencies**: `numpy`, `matplotlib`, `mpmath`. Auto-installed in Colab.

The code computes the first 50 Riemann zeros using `mpmath.zetazero()` and constructs Z(x) with Jabri calibration. No pre-loaded values.

---

### Physics Summary

1. **x = φ = 1.618**: Big Bang. `V'' > 0` starts inflation
2. **x = 12**: Gravity born. `Z(12) = 1.2` fixes Λ to observed value
3. **x = γ₁ = 14.13**: First zero. Inflation ends. GR era begins

The golden ratio φ, the number 12, and 1.2 are not numerology. They are phase transitions in Z(x).

---

### Citation

If you use this work, please cite:

```bibtex
@misc{jabri2026riemannos,
  author       = {Al-Jabri, Abdulla M.},
  title        = {Jabri RiemannOS v1.0: Riemann Zeros as the Hidden Architecture of Spacetime},
  year         = 2026,
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.19717561},
  url          = {https://doi.org/10.5281/zenodo.19717561}
}
