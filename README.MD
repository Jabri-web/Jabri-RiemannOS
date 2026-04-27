# Jabri_RiemannOS v3.0.1: Z(x) + T01 Solves Hubble Tension

[[DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19717561.svg)](https://doi.org/10.5281/zenodo.19717561)
[[H0-Tension](https://img.shields.io/badge/H0--Tension-Solved-brightgreen)]()
[[Free-Parameters](https://img.shields.io/badge/Free_Parameters-0-blue)]()
[[Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jabri62018/Jabri-RiemannOS/blob/main/Universe_now.ipynb)

**Unified `H(z)` from the `Z(x)` function + `T01` correction. Zero free parameters.**

Resolves CMB Planck vs SH0ES tension. Matches all DESI 2024 DR1 data points.

## Key Results v3.0.1
1. **CMB**: `H(1100) = 1.387e6 km/s/Mpc` → matches Planck 2018
2. **Local**: `H0 = 69.46 km/s/Mpc` at `z=0` → matches SH0ES 2022  
3. **DESI 2024 DR1**: All 6 BAO points `z=0.51` to `z=2.33` within 1σ
4. **Dataset**: `Hz_RiemannOS_0.001.csv` [2806 rows, z=0.001 to z=1100]

No fitting. No tuning. Only input: zeros of ζ(s).

## Repository Contents
| File | Description |
| --- | --- |
| `Universe_now.ipynb` | Reproduces `H(z)` from `Z(x)` + `T01`. Generates plot + CSV |
| `Universe_now.png` | Figure: `H(z)` vs DESI 2024 + Planck + SH0ES |
| `Hz_RiemannOS_0.001.csv` | Full dataset: 2806 rows, H(z) from z=0.001 to z=1100 |
| `Z_total_v1.pdf` | Original v1.0 paper: Lambda from Riemann Zeros |
| `CITATION.cff` | Machine-readable citation for v3.0.1 |

## Reproduce in 15 Seconds
1. Click `Open in Colab` badge above
2. Run all: `Runtime → Run all`
3. Output: `Universe_now.png` + `Hz_RiemannOS_0.001.csv`

**Dependencies**: `numpy`, `matplotlib`, `mpmath`, `pandas`. Auto-installed.

## Citation
If you use `Jabri_RiemannOS` or the dataset, please cite:

```bibtex
@software{Jabri_RiemannOS_2026,
  author = {Jabri, A.J.},
  title = {Jabri_RiemannOS v3.0.1: Z(x) + T01 Resolves Hubble Tension with Zero Free Parameters},
  version = {3.0.1},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.19717561},
  url = {https://github.com/jabri62018/Jabri-RiemannOS}
}