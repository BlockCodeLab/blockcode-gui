import RotationStyle from './rotation-style';

const DEFAULT_BACKDROP = {
  id: 'backdrop1',
  type: 'image/png',
  width: 1,
  height: 1,
  centerX: 1,
  centerY: 1,
  data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC',
};

const DEFAULT_COSTUME_1 = {
  id: 'costume1',
  type: 'image/png',
  width: 109,
  height: 81,
  centerX: 55,
  centerY: 40,
  data: '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',
};

const DEFAULT_COSTUME_2 = {
  id: 'costume2',
  type: 'image/png',
  width: 109,
  height: 84,
  centerX: 55,
  centerY: 40,
  data: 'iVBORw0KGgoAAAANSUhEUgAAAG0AAABUCAYAAACIjbkzAAAAAXNSR0IArs4c6QAAHvpJREFUeF7tXQd4lEX6/81Xtm/qbnohEBJAigXEeiIqJ57YEEVFOdFTwZLEk2KPera7EwKx/0XlUE8pop7YD9FDRQQLhBISerJpm7op275v/s63JKTsZr/dJMD53DyU50lm3nlnfjPvvG3mI/iNlQkTJuiqd1vjYEQMJ5PzQWSR4zFFJDSZJ4jjCNUQQolMOS8bukypLFHO4ZWwlkpkl0zkWoFgs1fLHdi+fWXdQE9PzaxsszvCfgMPRAAcJEKLKlrSPxn78hZPoL7JQDN1tOiPyrhyGjj6B5mSywfHucyJER6SYXVhZJITCZEemLQSYkxeROolaAWKuhZeYU2SCezNIioaRZTVizhUp8GBWg1+KTN4Wjz894TiraLSlS8MxDhsebGXg5I3ABg606cUH5I2zdVJL9ta/fXbb6DZ8pMMcHgvdLtotE6kbTJHf0x6pnbXQAy2nSZ96RRx8tKUx5vbuLszLC7+7KHNuHJsPaINyibqc/lwaxT+9XMUSqq1sLcJ86mXHHCS5vdKSz929YU4pSCVf46dCYpXdSYXMUS2gcoEzfVGuNvEw6S5GUkF1W8OGGjlc2JSich9BYKMI51QiYA8k1hgn9+XAfprS9/IjACEP4GShysaRbNGoIg19Q9Q/vrzSARbDhjx/HoLfj5odBPg9q2lq14JZ1wrpoE/J826RKbynJjERgiaTnxToLEmAs4WDUBIddKimvgBAe3LfAjZ9dbdIDSDcBR6kws6kwsepwBnixZel7jHCc/5GQUN+8MZZHub7OxLzLvmFZsh0pnghEcA2r4k+0I25Lab9hvx5sZYfLfX2OJ2C7N+KV2xQi0RugJ85Tfxj4P3zo9NrgcvyD2ayhIH+6FoUEqQVGD3Kwn7LB733229SCPTtYQAUfFN0OjdHYywjlvqDWhuNNg9oKMHFdgr1A6w044lw4dOPc/A4f23bt1nyIpzhk5iAFrsrNAj//1E7KjQbjES/cTvS99s6q0bOg18TVLsQonHXTEJjRC0gSVDnS0KHpcwcKBV5Fn+SSmmM7CiE/zz3dJgQHO9oUoETrKGANwpw2ckujzO94bFO099+BIbRia3DcD0943kknVxWLU5Wh6fLWX+feW/9gWiVp1nfUwi8gPRCY0QewGMtR9w0MpzLO8TgktMMS0wRgae1KZaE1obdfVet2FI+gsH64NNFX1tkO6ZdYNeG5rgmn7x6AZwfZYJwXpkv6egnjYQQQsQn3appjg9HHSi/N2O6qiLb/9A27R+/fqObUTzwVU0xl4KkHej4pqgNRyRRIFo1xyIBZXIzsTF9hEDcqaV51reIMB1ERYH9ObAShUTlQ1VEXA7RYfWK6fEFtYFFCfXjZ+csvyOAxsIoelqJq3f6njbIDfuB3gduKhOOpXKDt7/KZo++EHysm0lK29kTTbfAjHFaP27TOldhggnzLHNQSl5XCLqbJGgEjcvubD6bwMCWvFtCaeadd7v1TDFgKsti4bXw7W6o02xGfn7uxxQ0zCN35kpbzxzSMvYF68/EHSAASvIMnxbM8TtSSmo4xBgjAfhtSH33+rmcP0rg7G7RvvSmgvXzTPw9A0CfoqauWnvTFnYbaKkEXWDYv9aXjYgoDGi5bmxdo1Wio1Jagg6UAZcXXkkvB5B1vPec6Ofafi6vdHIzKl7po9rGLxgcgV4jgal1bMChVxfCsheENEEEpEaBo2+NWly8vjjqxmYOagY4+NrERnnUCUSWa+Sl1MWtUfG/WmLa58IxEmIS9E/GVtu7BsAuS42uaGr3RGg1/YdJ3s5SiXy0IbKmicf/Xnqlpmn14358wWVYJpoWIVSyHU+e56LSANEYw8y1O3wgaqLDqsLNY0a23jc/o8UFE5ej0ijem23tjwaXjffmlhujyArIQ0oaIfyUvQcdW3QG50ns5WlpjDgmuuMaG3SYUOltf69iozoZbP2Q+DD2WGdeqQSQCnACX7ZkJsOgQg6EINVDZth19m4z4iXvjBi6RVfqaLhYHPRoIco4Vzrs/b1vTUKd033oGnLs+aA0oJIq0MxrtWWqkYj/vSviXjjT/sQZQi4uNSSO67qFa6LA3HaMWf89l75YgvXUWsCR6UpCYvrPww2iH4DjU6bxh9KXLdUFDDTklIPju9p7ftjZsqyC/HqTTbERwZ0agcbw3H7e2YKXP1iBl657AvEGvyLyXbAKHBt0iL724QgqKjpN9DaZ64s11Ki0UiZUfGNft007fUYZ8t/ygJnjMP1p9WGf44FgYy2VoO6m31nXACR6Y8Ea8PsNqIx92lRbNpnxEebKR6auKULHXY8NNlNcDVrmXU4Namg9l21HfU7aNVzrQkeD90uaqQYJiq7OEQ7ceWROJz7yiX4av5uiH09x3oZLXU5AMkJYrCEYAJQyE0HASqDiwzdXuvMjlciuJUpJRf9GzrBJ/49bgGNVWbIXp559ycnLqn5lLAV0q1U5sfHybVytsjTFmuB/cf2X/c7aIzwvrnWBL2HfgCOjmOeEr25p2j4eHcqJH0KLjkxuJmgdgX2az2ZTXBghSaUvr7ebcKHmzk8OWkTmEuvtVEHUPK916G7KHVpWY9A6947k8doBfeLBHQsKJhGRQlBFbz00sTC2k19Aq3iTss5XkHOFLxcaWKhvYeaVJ4XW0gouYOBZo5pAYsCsOKWOJzx4uX48aEdoYz9v7auw8ljauEg/OOCb0E9nAugNyctrmXBzy5l17xsc6TLfj84MldncnJaoxs8L6OlSQ+ng4lR7EwqsJ8QFmi2ObHDoSErKdBOgILgZ3D00aRnat/rOLfyJwhVjUVXyRQv8KIUYYpqVTTL7dXReGvnWDx5hV+D/78WnN4Yz38/CWho/eGRz7871V89290xUyFzT2h0nixjVCs0+iOKWYcLsE2ErdVuDAu08lzrVgI6igFgMDuVHcRiZyx453ULP1EOT6UsqumIMx3Ki4jhqeZBApqjMXjIqv0p+N3JWgxLUG94tg+UrdoH1iQjJdqNuRdWHhOAm9p4zHw1A3dPqsLZQ9XZpfvtWlxSmFm8bc+qYZ2ZPphrnSUAkzleupJJJGNUGwjpqUC2NunhqDWi2G03hwWaLdfCXNViXHpth8hjjLCQeVuzDq2NeuaS2cxRPBY/wv4xuRXKsqnKjTvd4eGm3vfDmD+/c9fBsCa8pFqHK54bggyLCx/cWRoWjb422lBixuw30vD7E5rw96sOqSLHgD7r6WF1K6/YNsjkrL+OIzSGEjmHgMSZotm57+rVTGKaZptDh22C3RQuaLJG7yaB4mcs+upq1SideFxCK6X4TibcZxyhtXsaIssW/DDqk28WhJc+whJxXttggcXsxWUnBY3wqJrQUCs1uzg8/2UcLh7diBFJ6mJ8Li/BdS8NQuH4TcpOEjSSEjBmYPGHtcpAfPjcflGQPXxVQoE9MVzQHCAwxafbgzrSXS1atDp0zKem7MRWr4C8H07F+3ccm10SKkD9VZ8ttntWJOOpc76EIEg+Eahy9tniZzsNFCuTFtuvUtmsK+sVuZYSCmSqdRAropMSxYvd0KrF3C8nYNlNAYO8/TVPxx2d/A+S8NCZ/w6JLyVnpCyaLXiJSPLoxMK6HWGBZsuJnQFClmt0HkQlNPk9OANx1ujUIPfT87Fs1v9AC4YeW+T1FZGQvDzLY70laaH9/1ibsEBjDW051h9B6EmGiDYwA1ptOKXNI+DqFZPx4V0DJx6Z7mWr1yA5Onhov/vEyZRp5oISz2OJrf1ZQtlpkodXIv1eD89M648SF9dMIYDi0A0bNArwlXmWekphZnZFIFW1+6CZbJ/+ziSsviM87VHNJMoywew309Di4nHN+FoMT3Ai2iixPA7oxa6ObLeXoM3DgQUvfzlkwGfbI1DTJOChS2wYnqjSJGErluN8HhQpsKP8ofeSkH927+KxXQNnYStQyF4Ot6Ue3mHtYw8bNEag4Z74jBavtJkAMaJGQmRcE3ix99UpU4I7/nUWXrjRHv6KUYMcABaMXLcrAut2msHsJLZ7OMUrc2TYbGex7IQYo4QbzqjF2PQWRKjdYQIPpCYBaUmAKPi8h83NwAEbUG1nFwU6OGUJr7OXp+LlKZ/65Z6dXc5mLVoaDZAl5okk+wHptqTFdT0a9Am09t7L8yw/EIqTAPDM66E1+dTYQCLz7a1DkJEeg9MHB0h0YatWpwX0OkCSgOZW3/8suHm8FEsMcOIIQBsgZ7a2AfhpO+DyiWi2m696Ph2rr/5U0aLZXwaU2yXC0ya2i0EnJbROkLlp8Uuqvw001H4BTdEO58BUIVo+JgSnM9HJFrPO4Ms27uySYXUbnSIuXn4xvr13Z0++oiKA004E+E4pbAyrNifw/U9Aq0qRNZDgxlmAcaOC98B4/XqTsuDqWgRML0yXl53/XVV7QwqymePwc2tzxCuDB+9tJAvQGJxoH8603ohX5lqu8YLmEJlkEQ4m5qmmHDy/5t6z6ZfdMld1+cdnDfrp4W4O4zHDgZSEwKSZHPtxO1BlVzO2gatz9jggwqSOflkl8MtO7K3R4vLCzJKte1dlqWsYuFa/7TR/XSjmYz7I+vXgJkzwaT6P/PpPfj7kUUOuXjF9fM20+y46nCmeYAVOGRl8PAy4jT8D9aoWZXB6odZgInvi6epbudyQP/8Wv3sqC3897aeqQSbP/dRD9nplEEnriY6ArHWD3A6CbAKqI4CGKlmztBmCNjvpGVuPFTqgoPU2slNOmWIgzWLLN/fuArv1gkln+w5zNYUB9m1HTFBNi/6rk5kOZA9WT49SlH24FXcUmvDOlevg9XJg6jwr7UobC78wp3t7igYLjrKMbLeLb3DpIgYNeXpvlxU6YKDtnW3J5qmLhYt9RSuO4Dm2msiZRCZWjqdDitoM+LxyGJ682QFyxskhTQQ++w/g7V87ShUDJ48EEtVncjHdaeETVRjt3ojzhpSr6oJVYopK9cFYcCA3JyyqWdq5Yb+CZrszZhJ4bikoEkHADBfCHKOEkxVlhK0oQZTACTI4zre67vnoNMzKG4yR46NUD0ipuHnbsTnbmHo/Kls1r7uKvXj2wR1YcvEG1W3aKyqJqx5ufnJB7V8HBLSK2xIGUZ13u0bnMTAPiQKWn7hQd85ZrsjUdyZjYWEysoaqFI+MyA9bgerakCeizw2YKTJhfFftNgBRt5vi5purMW/0OoyICy0iwXy19oMxcEv0wrRutlq/7TRbjvUBEPqYNb1O2UWhlPImI277ZBJefy0eVivboCrKp18fG/HIbBkmyqMjemWSicVHHm+CpeKnoHmP/gixPMjWJl1JcdTIEefmH7mFw+r2I2iWhZwg51nTwnsQoMQeifnrJ+Dxp+JxwoggO87R4rN/jlUx6oGzxgHMI+KnMD/AosJmtG3eifnnbYGgMge0/Sxjd68ZYF4vJqQ9a7d176JX0PbMiR1nFDxDZKIZCwIzpVylyNPvt0fUfHZuPrpcZbTlxV8LKr0ZSrimMzOyzGHb3ng8sOV0+uhjseTEMWIX+7qjLlvC24qBQyoulVIZICp3bqgLIDoSGD0MMHV5mEBxia39xIkH8h1b3rzgm/sseudSjc6boje6IOo8HXE0dnQwEdgOFPPktzVr4W7RQKbcQsnleiLlOYdf+e8XNNvtUemyKLxOgAn+KlCghsrklZQlNfd1HmtFbuwmUe8ZFxXvUHWeKQxTouTzuxz6TW6neP+kTyfUcLL3g0nn69MW3GOCJbbbpDOwioq7+PX8zTeVvaBN+wFOBGdOYxfPQ4UleH1RBJLigKR4xeXGPFaPL3JizVrXDlkmk3fsXal4xavujBvjEeTzOYKJPC+fTQg1+d4yIYqokz2kSQa3CzJZB0F4MemZil7vefUYSXmO9SlCqNoXCX4mlDyRuLhmZfsIy3Os3/GidBrzQbJwOnPQtqfOKa7Dw8FQFitiUe22Zp2DUm5B8uLq5zvP0sjMq57QauS5D90XIVwwUQs9dQEl+4EyFTvsMCF22YKBxZmT+/Mk8Asm83j8eUUqSqs1y4v2rL4hOOLh1+gCmi3X8tKvoahbQiVHKbkzeXHNs52Au5oSMlHgpctAZCvHHZYDIMzn65Ul7kdC5S8gcesSltQGjFWMHDx1LDhyY/Zgctulw2u4ycNrYRnApydCHXfn+vNWpL7x8Y7I9UWlK7vYVH2hGahtB2i2POt9oPTxcDphG4gDKdxHtPPPWFSmLtMlhI5OHDx1qJcjC02iPPna02r5Uwe3ICveiehjeMuGhXq+22vEiETnxjGpzpvIjO1HLfNWAc12R+wwKhCWe9A3wU/IvUmLap4KAY+QqmZnT8kQPeJ0QSCPD413kZPTWnFOlgPDE9tg0skQwro9GhILSuUfDxo9ty5P8zg9/D/bqPe+PXvWVIdOJfwWCkjlubFbCYiKWIOKjmTMTlpif1FFzbCqjMmcetLwJOePy2/eh29KTdhywKBEnKONXliMXmTFuzA03qmI0UiDBLM2cFwvEAMsRY7dn2bhlLJ6DaNH06PdNhD6FQT6Hple3HGGhzWIPjYitvlJaXC694JA/RsMvXTKRKVE5R5WfB/57Gg+cujUnFvOshfced6Rxc2iwnNXpmLOudXYVanDp0URqG8V4Gjj0eLmkBjpQVqMG3qtjPQYtxJg5jt5a5pdPGqaBeyu0CogNbbyEgVcEsh+KuOAyMsrfi559/X+GkNf6ZDqu6wzvRztX4YImtwUw8J7oaf3IZ2cdUXTspv2mzs/BLO7Soe3NsYg/9IedqhCjGX3MhDdEkF9C4/nv7TimvH1iNL7TE2tSGHUylj6Hws+Kop+bVvJill9ndiBbE8O3m15VJDxYL93QnDQVe8dk/F6Q7/dZToh+4oz4/TShnX37O5gl6VhMFV71pm1GJVy+KU9jQgY9L5Qj9t9OF3hiGvt8bWJuGh0I05K7foy38a9RvxpWcaXRXtWTuz3+ehHgqQsN/YvHMj9/UizgxQFWZFcUHN1f9EelXnV7ReNqn/2qalHbtsw8TfjlcFYM6fUZ0CPzPIl23RWqVj8bdNWwOvbWXe/nYoFf6hEnLnrleHSai0ufz5zV1HpquH9xfNA0AkZNGOiAS2VrX7uLfpnj6PcGwmLq6/vD+ZHDZ62dvG1By86d9iRx34qG0XkvpOKt+84BIw/MXAaQH0TsPEnMM/7PStSseTanil8DLTLnhu6e/uelepjL/0xsBBpkIO5lkcFqBePsdlRcDe54ajw++hngO7JPxILav7o74pqKPyeNuKKho9zd0d2fgWhqFyPz3dGIO/hVCCq5/3o9gQuxYu1pQif/tuNaoeg3PPuXpg2OvvN9H9vK1l1fih8He26pCI3dh4FeVptxwarDpHpZjQdakZLlXo7muPwYcJC+xS1/fir94dTL6GrZu9Rkk7bCzuHKqxZuHx6zyCqvVbGrBtrMPIkPa6aqsfXnzTgmw1tePmG/X6zh3PfTsVnuyKe3lm6akFf+BzotmTPnIRxeo1nUyh2dcLJFhCOwO3woG53I6jKfERCyN5mUXPO0ABvPvU22FFDpl523nDHmkXTu94HY5rhlOeG4pFHYjDhd13fs9p/QMLzj+7HzWdWK7vxvGEODI1z+n3CabtNj2teHty6rXTkr9s1P7SA4ECj1I0+UZ62a4g9AJAUtX3HjY4Fr/F5371OCQ37HPC0qHgHhAB8nBGclm+x3r231xy0ioITxvGSew4h0pmUwrLZFmPaUWMWZ0+ohkFzZE5X/xiNg3YNDmiSUfC3SIUnj4fi1jsbsafEgxvHV+KPZ/aectfs5HH90gyU1mluKipe/araeThW9XxurBzrfSDq/Y6mJAPMSUfenaIyRWuNEw5bCygzSwMUIcmsGLaEV7ql1C2VEC1/OD4Bli3DDHxGuCMeIwgE5kgRb/1gAQtl/HzIoLiu2A5LjXHh5W8T8djT8UhPE6DR+Dp+8FEHin+oQ5zZi+RoD+ZPrgj4XuQ+uxa3/iOdvRb+96I9q+YeKyBC6VeZveo5VpNXQ5k9pcorQngO8WNiFBHZucheCme9E02HWsCA7FKUEIkGXAR7ADM4i4LIwWDkodFwiib/zGcJ0PAy2Avevx/ZiG1lBkVlL2s24OVlSTAajhBlGuLtuY1oPNSEBRdVKPZY93Dax0WReHdLNFtErs0H9Nf8svvdNcG5Oj5qdIy0Is86k1L1npHYYVHQmPznsbPd5m7xoNXuhKvJA8oyM/UiuBhdD6A7TwPPE/ACUcASxa7Bz1/KDHjqowTMvaoFi9cYUVxtwKBkQHZ5sOzNROj1R0Bj4f5JF1VjlNWBA3UanDakGfMvrFT8lEv/Y4XDySlP604bW4/BVudLZMau244PONRx0TFSmg+Nrd76DCH0DjVN2ZlmPSGmXdQFbCJ7ZZYHDlmmkBiYThm8XgDXvksJIIgEDDD2s94CzO5hwyCmx+GL9R40OoATRwuorpFxxmmH5WInLurqZLy1og2bvrDj6csPKTuVfUxh5um1inNZORcpZPBSPLl29zHOM1cz40fqdBFUdfOjI51ufjco4tSQMScbYUo8nCPBUsuYSGRuo/4s7CJGcjyQkdojHyNYN/c+2ISyojokpWhweVYZxg1q7ao5yniR3LBzdjA6x9vve5wuzXOsCQ4NfY8C44MxyxQK64ho8FoeEATgxOE+nx/bBnUNQKX98BUlZVWrK+0X9GKjgMQ4IC7W50MMI8eDnW1NDoqo4iII9T2M6Xp44pPIjeuPg2s46qamvZZflWBfblSUCM1qDnJQx6mg4xE7LPrX7xsQ3+SOzPalTbNJZkC5XECbC3Ae/st24uE7Wx2sMsBFHtDrfbuJAc+cvv1RDpQD20v83G2jvyczdn3WH10cbRoB9Th248WWY8knRHFx9arv6S0+L0nHZhiUAgzPPPz489EeUqf+auqALdv8Xal9gMzYGVZqxTEcTUfXQZVv253RZ4Pn1wLo9eFDg0WHiDTTEe0wJgoYM8y3a45BKdnRhvQ9P0DDdbukwaGAXLsz7xiw1G9dBgWN9cS+JzOswfIBgAt7e7LElGAAM7w77Dd2DXf4EN9FQSYCj1axVeORvzRg6ol13b+a8SKZ8d+neHSfNlWgtTey3WW9l/I0n1D01LEPV1J2XGdRyX4eafbd6bLGDCxszAe6tVjJjTxYp8Gz6+LAYm8+64J7nMzY/sDAMnB0qIcEWgd4eZYaUBy5e9aNV22EBhGpJgj6bg4WBhoDz2gImAcf1rAZWDW1wC/FXUyOK57PxPKb99UZdfJscu0O1V9fCouHo9goLNDo7LToCk3rtyDo8gxeZ76ZiGR2nCFO31Nb12oAdqOSqfRMSwxDnVdeOpBk7NvVAn5XCdL0Pb+CMrkgC5RKp3y65cNjdG10YJAMC7SOHZdrYa8p93qFU2vWwBivhyZS4x8bprAkWACzyafus7PP320U9qgKu93ATAb23ENVLWCvw9YDOmwoNSmZWN0Ly9D6ZJf5+qLi1T1eMR2Y6Tw6VPsEGmOx4u7YpVQmQbOXOJFDTFYkBC3fq/+xY9hsB7JL6aw4nYDLf+iHZVexHJG1OSU9ZmzxF/H4v++iF2wvXqM6yHt0pr1vvfQZNNZ9eY7ln4SAJfAEpccJHJiywiLgRODA+cI0IRcWRZDcMuodxDb11RFJX8/v+X7k/0ALMq22vNjFoIQ5m0O6ECYaBGijtNCaRbDdSMhhpzEDk/kyfX/AHM8seuBp9aKlug2SU2qWiXdOSkHD8pFDrpQ2PbCD04tdfWX/A03FXjiQE3OBwHEf9mYSqCDTa5Vf0xwdvMzfnbCkquNDqqMypx58YcbB1DMzuz7btOjzeLy6MXpeUfEav98h6ysvx6p9eLIpCLflOZbthMDvV/bCGagS7aakivBYkLiwpkc29PCsK1+fO7Fq5o1ndY2w5PwzDetKjNOLdr/7Tjj9Hq9tBgQ0lneysyYqNVojfERljAh+0gWaHuLiZMznvMZ3tsftt3e/Mtzeaszgq7MuHWsvfuSSrmnhkxZmoaJFGFNUvHrr8QpAOHwNCGidGamZZzFLrZ5xkqh5jqd0iAwECHcrX3mQZBnf8oTOo7K4N6Gwkn0zOGhQ54Qh0zInDmsqWXJN1wTUM54chlaPkPLL7pXqX10JZxaPcpsBB63zePblD9JFoUFX7ZCECI2RyC63ro0TXUaRUEHyOpsNJk/3T06qmQ8G2mUn1Zf85bIj2Byq0+DiwkzX1pLVzGMdFHg1/RwvdY4qaAM16NFDp98164zKxTkXdLzKhwWrU7B2W+S5RaWrev2A3EDxNJB0fxOgjRx61d9mn115z5yJNcpcSZRgwl+zUScJiTt2rDw2n8kYQNR+E6CNzrwixWKWDn2WV6LkgDBZyD528NJX1l2ShozbsWNl8G8VD+Ak9zfp3wRozCIYNeTKtZedVD/50ct8GuQLX8YpPsltZbrXt+1ZrXx3+rdSfiug4ZTB0yLdHA6+dP2+iGfXxWNInAufbItEm4QHikpW/9emFvhbaL8Z0NjgTk+ZpuejpVaRl1kKuae2RfiuqHTlOb+VHdY+jt8UaGxQo4dceYNM6S1uN3f17rITfn3e5/i+ARPOgvp/2asAsXevpeYAAAAASUVORK5CYII=',
};

const DEFAULT_MAIN_CONTENT = `from popsicle.scratch import *
from stage import stage
import sprite1
run(stage.render)
`;

export default function (getText) {
  return {
    editor: {
      name: 'PopsicleBlocks',
      package: '@blockcode/workspace-popsicle-blocks',
    },
    assetList: [
      {
        id: 'main',
        type: 'text/x-python',
        content: DEFAULT_MAIN_CONTENT,
      },
      Object.assign(DEFAULT_BACKDROP, {
        name: getText('popsicle.blocks.defaultProject.backdropName', 'backdrop1'),
      }),
      Object.assign(DEFAULT_COSTUME_1, {
        name: getText('popsicle.blocks.defaultProject.costumeName1', 'costume1'),
      }),
      Object.assign(DEFAULT_COSTUME_2, {
        name: getText('popsicle.blocks.defaultProject.costumeName2', 'costume2'),
      }),
    ],
    fileList: [
      {
        id: 'stage',
        type: 'text/x-python',
        name: getText('popsicle.blocks.defaultProject.stageName', 'Stage'),
        assets: [DEFAULT_BACKDROP.id],
        backdrop: 0,
        x: 0,
        y: 0,
        content: `from popsicle.scratch import *\nstage=Stage([{"name":"backdrop1","image":["backdrop1",1,1,1,1],"transparent":0}],0)\n`,
      },
      {
        id: 'sprite1',
        type: 'text/x-python',
        name: getText('popsicle.blocks.defaultProject.spriteName', 'Sprite1'),
        assets: [DEFAULT_COSTUME_1.id, DEFAULT_COSTUME_2.id],
        costume: 0,
        x: 0,
        y: 0,
        size: 100,
        direction: 90,
        rotationStyle: RotationStyle.ALL_AROUND,
        hidden: false,
        content:
          `from popsicle.scratch import *\n` +
          `from stage import stage\n` +
          `sprite=Sprite("sprite1",[{"name":"costume1","image":["costume1",109,81,55,40],"transparent":0},{"name":"costume2","image":["costume2",109,84,55,40],"transparent":0}],0,0,0,90,2,False)\n` +
          `stage.add_sprite(sprite)\n`,
      },
    ],
  };
}
