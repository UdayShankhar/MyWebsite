import React from 'react'
import './myportd.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { AiFillGithub } from "react-icons/ai";

function Myportd() {
    return (
        <div id='myportd'>
            <h2 className='title'>Projects</h2>

            <div className='cards'>
                <article className='blog'>
                    <img className='project-img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUEhgRFBQYGBgYGBgYGRgYGBgYGRgYGBgaGRkYGBgbIC0kGx0pHhgYJTclKS4wNDQ0GiM5PzkyPi0yNDABCwsLEA8PGBERGDAgGCAwMDAwMjIyMjIwPjUyMDAyMjIwMDAyMjAyMjAyMDIyMjAwMDAyMDAyMDAwMjIwMDIwMP/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIFBgMEBwj/xABOEAACAQMCAwQEBwwFDAMBAAABAgMABBESIQUTMQYiQVEHMmFxFFJygZGUsRUWI0JVYoKSocHS0zNDorLRJDQ1U1RzdJO0wuHwRMPxF//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAQADAQEAAAAAAAAAAAAAARECITFxEv/aAAwDAQACEQMRAD8ArZprUpamMa0GtTDTmNY2NFIaYaUmmmg7h2Kv+fw+Fycsi8ts9cx90E+9Qp/SqbrnPojv957QnqFmUe7Eb/8A110Y1ER/FrFZo3hfZZUeJiOo1A4I9oyT81cPv+NQRExJC8rIWT8OwjQMpIP+TQaQ24Pru1d7uVyp8xuPm3+zNce7cW1rbXUiukshnxcctdEMffJBDTYaR++jtgBQM9aCpXHaG6kHL5mhCdoolWFPdojADfpZrp3ox4ZJmKaWNo2iS5iUOpRnjd4pEZVbB0qxlGcY7wqnXPEXjgt5LKNLYSLIjiFdUpkjfGDO2ZMGN4mABHU1efRXO0gfnFjNCChLks5imYSJqLb7Osm3tFB0SikzSE0DqKx66yA0BRRRUBTZmwrHBOATgdTt0Htp1avEziGTuu3cfuxnEjd07ISRh/I560Fd0aLXGL1PwajK/hLhdRIyxwdTjPmenjVsAqrsAsaLqu0y0CBlGtwcrs5KnIOcMxzsSc+NWikWik5gzpyNQ3IyMgeeKqPpEu5Ioo3QsUZyjqjvGxLLlCHjII9VhuGG42qB7JWlyLuKSK2ljtwGDmQgM2sd+R2YKXbUExgeqqjHXNR02kLAYBIGTgZPU4JwPM4BPzGsdzDrQpqZc9GU4ZSNww8NiAcHIPQgiolOzMJ/pGklJDatbnSzsctJoXChyMLqAGAMDGTkJpHDAMpBB6EbilNYVRYowqhVVFCqGbAAUYUFjn6d6juIcZggYc2ZInZdlc5GxOlzpzpXOdzgH5qCVNUr0szaeFyDPrvEv9sMf2KauCP6qjLd0HVjYjGx1dCT7POufemmXTYxp8e4X6FSQ/big4urU8NWBaeGqKzA0+sKtWVFJBPgMft6D7foqhMUYp2g41dB4e0+ymUBRSUUFoIpjCg10TsR2dtpbUySBZHfUrZ/q8EjSPitjDZ9o8KqObGmNVi7SdmZLaTSql1Y9zSCxOTgDA3J8P8A0ZW27E3jgNJy4Qf9a+Gx8hAxHuOKiq0aaatUnYebpHcWzn4okZWPuDLg/SKr/EuGzW76Jo2Q+GobN7VYbN8xoJDsXxHkcQgkJwrPy2+TJ3N/YGKn9Gu5uN683MfI4PmOor0NwK/Fzaw3Hi6Kx9j4w4+Zgw+aiNmqX2w7IvetEYygaPWjF2ZcI2GRhpB1FSD3Tgd81eqbpGc4oKZwfsBDHByZpHmy4k7haFQ2goQCraipGMgnfSvlVm4VwqC2UrBCkYbBbQoBYjxdurHfqc1uk03VQZKDtTOYBVZ7Q8cK6445FTQMyzMRphBGwGdjIQQQPDIJ6gGDP2h7TQ2vcIZ5CBpiQZc5zgseiKcHdiM4OM1UuFdvLwXqR3USRwO4hKodbxSN6gkYHOScDoBg1l4RwtrsBoQ8MOokzsT8KnboxQk5iXr3jlz12IzVkk7MxC0e2jQJga0wPVkU6kfJ6tqAOTuaKsyyZp1atpJrjR+mtFbHylB/fW0KIK0OOf5u40ytkAYgOmXdgO42Rg+3PTNb9RnHt4guJzl0H+TkBx3s6icjuDHe9lCI8sA6LzLlNU6KMLqV9KKSj93uo2kgsQOvUE1Y6r8M2Jok5k6FnkOkpqVwgbuu2CEAABB2yQBnwNgoDFFFRPaO7EcaoZOXzZFiL5xpQhncg+DaEcA+BYGqMd/2jijbQiSTNrEeIlBGs57gdiqswwSVUkqAScAVite1UTMEkjkhJAYGRV0FWOkNrRmUDIxlsDOB1IFQ/C1stbN8KZUjJigUTuNEYChyPlOp+ZF8zWqWtfgsUnwli6lQyGZv6N3CzIB4AoSceaig6Cy+dct7WcPe84tyItiERGc+quldbNgHOAHAx4nart2ZnTTJbpJzEhZRG+rUeW65VWbxKsHX3KtSkVlGkjyrGod8B3AAZsYAyfHoPoFBr2lmkUcVsGf8HGqKdTKWCBVJOk4J6be3auf+m5GNtbkeqJWz7CUIB+36RXT65N6br4gW9sOja5GPj3TpUe7vMfmFByUVJC2WVNcYCyD1k8D7V8s/+PbUZUhweNNYd3KAHTnB2yM5yPYDtWeXisltwqUqZXRlRQWZsY7q9cE7E+GBk58K3Lm3jVX1uFxhgoB72CECDywAxyftNZeOXrxxvBHIXgkCuFfAZCDnAYHDg4/FJB67HNSd3ZpK+lYyyoxd2OlUdmGSHc76c/ijyPXwxeRURxLhUyYaRAvdUquRnDYI2B26+O9RcqFTj/3/APPbVnsrqNrnmXGqcDcRphUdvjOzEdweGB5e3MLeWyB+pXxOoEE532BwcU48kR+aK2+XB/rG/VP+FFb/AEqYY1J9neNy2sweMFg5CtH4OCcAfKydj7fbUUxqxdgbQSXgdhkQo8n6QwqfQXz+jW0dMvrrQuo4D6csTjuZG6g+HltXIO03b52dktwMAkGRhkkj4qnYD2mpz0mceaOIQocPLnJ8kGM/bj565CTXO9/G51Eo/aC6Y5MzH5lx9GMVY+Bdumx8Fvk51s2zZ9ZPJ08QR12xVIpauG6ufafhPwSRdD64JVDwyjo6HcAkbahXRPRDxUPayWxO8T6gPzJct/fD/TVN4LGbvgU0Td57V9cR8VVsnRn5St8zCtL0W8W5V+qE92ZGQ/KHfQ/2SP0qrNegdVJWCOTIrT4zxyC0j5s8mkE6VAGXdvBEQbs3uqokjWhxLisMC6pJFXyBI1H3L1Nc/wCOdrZpARJIbOI+rGmGvJQfBSuRHn83cbbiofhXBTdTf0IiR01qXxJKUzgySu2Sx9XC5O7pnIyKmribv+273EjW8BWPSGdhrDyuiZL6eWSqHSM6VJcjOCnrDb4J2WjuBrnkMoVzhFbQiODhz+DILSFg3eztkqNtq2eE9krW04hFLHH68DourvYkQoxk36OyE9MeqfOrNccNXmGSNjE7esyAaX8O+h2Y9N9jsN9qDFDwVIxm2Zoz5ZLKfYwO5/bjyrAnGHcm0dOXctleoKaSN5EJ9bbcL4nbwYiRS3mOzTKB+ZHpY/OzMB9FYeIcDimj5ekqQdSyDd1fbv6jux2Gc9cDyGJJniJGOMKFRRhVAAHkAMAfQKzioDs296rSQXca6U08u4VgRMDnOV9ZSNuvnjfGpp+qCovjh/ol/wAo3lBzB4aVY4lP+rPj5nFSlRPF2HMiXNwP6Rsw7JsoGJj0xvsPMUGvYz/h40E0gykjmJk1Kw1L3mffQVJ2GRnJ2ONp6oLhNyDMIxO7aYVYwsmwy2BJzN8nYjSD45xU3IxCkquogbLkDJ8snYUDqiu0BZI0uFUsbeTmlR1ZdLxvj2hJGb9GqLfds70TP6qaWKcrSrgFSQQW6sc7ZBGfCui8OuDJGHPXLKx0FMsjFCQpJIBK5G52IoIXgN9KFkjWDVpmkfIlTBWdzcKQfxhiTGRtsfKtNrqY2CR8g4fRGDzE31uAe77tXuAJqXXgIjlaa2kMLMArJpDxEBiwwhI04LMe6QO8229Yl7OB0RLiVpUjJKxhRHGSQRlwCWfZmGC2khjkGqM3AZjMZLsrpEhVEGdWY4gwD5GxDO7kEdV0nxqYrDcTLFGzkHSik4Ub4A2VR5+AFaKXky6XliRUYqvdcs6FyFXUNIBGpgCQds56UEpXEvTRLqv40+Lbqf1pJP4RXbK4P6V5NXFHHxI4k93c1/8AfQUVlq3ej63hlkaGYEq4boSCGGnDDB64DVWCtbfBr5reZZU8Dn932Ej5zUs2NT1u8TZY5SqRvJEjh05wAYqjb4IA7pwRjcfPUueLxYdEjfQ6q6q2NBbQCQ7jcDwOQc4Psqzw2sF9IbvWHZ5EXlZA0QpvoK/jFnVST0wxAzvVev8As7IsklooIYxu8RAOXQOr6ATsepGeu4HSuVMY+C2UtxII47qGFhhjyiNYHUFe9qYZ8AffUV2qJW5dGk57IQpkYAatKr+KPI7dT6tSTS28cCSR6Wd1xLBKnMSNwCOZGz5Mfe3Ayc9MbbVSZ8nzx0Pn7T7+vz1rjEMzRSUV0FgY1bfRvIOfMni0DEfouhP2/sqoGt/gHE/g1zHPuQrYcD8ZGGlx7Tgkj2gVQnpSB5sTeGhh84bJ+0VQ67F2/wCDCaINGQwIEkTjdWUjOAfaP3Vx90KkqQQRsQdiDXOe2N3uQ2ikqQ4RwuS5kEaA7kAtgkDPTbxY+C+P0kVl0P0dJy+F3kr7Kx29oCkH9qmucWU7ROkq+sjI496EMPsrpPbe7jsbBOFRkcxxmTBzpBGCCfE4Gn2nJrmhqo9M8Iu1kjV1OVdVZT7GAI/YaoHb/gsycRiv9bmEqULka1tX0lFfSdlQkhskYBznwqW9FF9zbBVJy0TNEfcMMn9llHzVe2UEFSAQRgg7gg7EEeIqo532f7PQRnUyl5W9Zn7zN7Wbx9w2qxcMjHwq4TbZYdI/NKYOPZlV+isycCaI4t5AqeEciF1QeUbBlZV/NJYDoMDaoXi4eK5immIZHxBJoUxqVOSmrvklQ2onJwQNxUVZojzblZF3jgV11eDyvhSEPiEUMCemXx1VsSSjLZrXtplKgAaQvdCgAAAbYAHQVsq4/wDQaIyYpQKYJF8/3UhuEB0l1z5alz9GaDLRQpz0ooCoPi0oE6jXOpETthR+AOSB332/CDGy6uhJwanKgOISYuHHMmTESDBX8B3mbvIdtUngRk4Gnag2OE3GuWRBccwIkY5ejTyydR1a/wAbUMbZ20+2peovg9yZGlPPEoV1XHL0GM6FYoT+PnUGz4asVKUGo3DYTIJuUmtSSH0gNk9SSOp9prbopKoWikooKtxy/nnmbh1rGVwBz53UhI0cZ7mfWfB2PmNuhKy4sJGKiSbWiMrBQgQsyHKF21HOCAcADJA8Nqks0lAua88+kWTVxW6Pk6L+rFGv7q9C15w7Yy6+I3TZ/r5B+qxX91BDYoxS5paKy21y8ZDRsVI8QcfR5VuzcfuHADuW0kkElsgkAEhtWfAVG0maDM0+pdLe8EAADwwQPCtfFKaSpgTFFLRVE0TTDTjWMmiLJ2e7UGBPg8yc23JJ05w8ZPUoT4fm/Pkb5kL3s/w2978V0isfBzypB7CG9b34NUljTGqWasti1f8A8+tIu/PfW6p+c4J+YKwzRc9rLKxQx8OQyy4K8910qmevLTAxnzA38SapkkYrWeKmLrDc3TySNJIxd2OSx6n/AMU2nmOlWOiOh+hjiOi5ltidpUEi+WuM749pVz+pXZRXmvgd+1rcR3KAFo21AHYMCCrKT4ZVmGfbXXx6TuH8sOTKGx/R8tiwPlq9T+1VRdiajO0PC/hVrJACAzqdJIyA43UkeIyBn2E1zXinpakbK2tsqjweYlj+ohAH6xqncU7T311kTXLlT+Ih0J7iqYBHvzQdjPaC2sUWK6u42kVED6cs7uFAZuWmWGSCd6rfFPS1GMrbW7P+fKwRfeEXJPzla5SkIFOJAoLHxPt1xC4yDOY1P4sI5f8AaB1/2qrbpqJZ+8x6lu8T7ydzWdIJDuI3I8wjH9uKeLKY9IZf+W/+FFYYpHT1HZfksy/Ya3IuNXiepeXK+6eUfs1VjPDbjGfg8uP92/8AhSrwq5PS2m/5b/4UEjF2z4mvS8l/SKv/AH1Nb0HpG4ouMzq+DnDxR4PsOhVP7ahBwS8P/wAWX9Rh9tOHZ+9/2WT6P/NBb4PS1eL68Fu3yQ6b+/Wfsrfg9ML7a7JceJWc/sBj/fVDHZq+PS0f6V/irTvbGWFtEsbIx6Bh188HofmojrEPpetj69rOvyTG4/awP7KkIfSpw5vWMyfKiJ/uE1w6lxRXoCD0h8LfpdBflxyr+1kAqQg7V2D+pe259nNQH6Ca83UuKI9Qw30T+pIjfJdW+w1nryqUB3wPorYiuZE2SR0+Q7J/dIoPUQrzFxeTVczv8aeZv1pGP762Iu0F6gKreXAB2I50h+1tvmqMAoH0lIDRmilooooCm06kzQJRRRREuaYaUtTGagDTDSlqYWopGFY2Wnk00mgxlKTTWQmmk0DcUhFLmkJoExS0maTNA6tqw4lLA2uFlVvMxxOfDoZEJHTwrTzSZoLanpCvVUL+CJ37xTc5PsOKY3pBvz+NEP0D/FVVzRmmiyTduuIMMc1B45VFz7t8j9lax7W3/wDtDfMqD/tqEzRmgn5e1t0x2kkG3g4+n1KxN2nuj/XS/wDMb9wqEooJ+btXOyMgLKSMaufclgcY1AGTTnx6Y9lQlxcSSHVI7ufN2LEe7PToKx0UBRRRQFLRRQOpM0tFAmaWinRRs7BEVmY9FUFmPuUbmgx0VPr2SuwuqZUtk+PcyJCP1CS/9mrNaejmILzLi/VV0PJhI2DctRl5A0hB0DI72jG433oOdUGnPjJ05xk4z1xnbPtxRRDQaKdRQNopcUtBIGmtSmmGikJpppTTTQBphpTQiFiFUFmY4VVBZmPkqjcn2CgYTWW1tZJX5caF2wTgeCjqzE7Ko8WOAPE0+7sJogObDLHnYGSN0yR4DWoyam7+6AZFih5ltKitBAurS0gIXE+k67iRHV1KljnukYUgEMA7NFrdpormCRkLho0JzlEDsI2I/CtoJbCjGFbDNiq8TVl+5swZ7ySWOGWMq4ACqI3UjQr6Boj7q4WPd227gGphG8ZtlDLPGumOXUQg/qpFOJYPMaGIIz+I6e2oIwmkzQaSg3ODcPNzcJbqwUu2kMwJC7E5IG56VuDh1n+UU+q3X8NZexH+kbf/AHh/uNVei9VfcPsoJz7m2f5Rj+q3X8NJ9zLP8op9Vuv4aOz8EJS5lmi5ohhV1TW8YLNPFHkshz0dqeOJ2Pjw3A8Sl3PqA/N1ZXPvGKIb9zbP8ox/Vbr+Cj7m2f5ST6rdfw1sfcOJbi5iLM6JaSXMTHuMQYUliLgfjAOAR0JHlVdzRU19zLP8pJ9Wuf4KPuZZ/lJPq1z/AAUzhvDouUbq5Z1i16ERMcydwAWVC2yIoKlnIONQABJ2yre8Pc6HspIlP9ZFctI6+0pIuh/cNPzVQn3Ns/yin1W6/go+5tn+UU+q3X8FYLzg0iXCW8ZEpl0GF1zpmSQ4R1B9XJyCD6pVgema3J/gNuxiMTXcikh5Oa0MIYbERBBrdQcjWxGcZAxioMX3Ns/yin1W5/go+5tn+UU+q3P8Fa/EPgjxiSASRPqw8LnmLpwe/HMADgEAFXGe9kE4NR1USPFuHLDy2SZZUlQujqjpsHeMgq4BHeQ1H5qX41/m1l/w8n/VXFQ9A4GjNJRQKc4rpHDr9Li3ZrSR7COIRrcQ28IaWV5WCR8qcMHcs/dwxBGPGubVb+zHHjwyIzBYpmulxy9ZV4eS7KjuVBxq1vgbHug5FET0MlvYuhSzaW+kI5cc7LNdEkd1529SDOSdCgsRuWXfFe7S8YcLJbGXnTyuGvJ1PcJQ9y1hP+qQ5yehb2Clu+2zyq8jQIly0ZhS4jLqUgbGpSGYkyAAgPnIDtVTA8qgKKSlqgzRmiigM0UUUEgaYTQTTSaKDSGkJpCaDZ4dbrJMkbvoV2Cl8asE7DYkDc4GSQBnJ2FSXOCRNy3W1XvIQGMl3K64ysjLpMaZ2OOWvXZyKgmqegvFJW7ZA52jnOlHdZApaOZOZlFaTSAXZThkkbGSMwZY+JSSSLHeooinAddScpOaciO6YxgMdTBg75yVd99hjee55jGJ5MXcjFljSPkpb3SIYXhLhsnnRhUJGxbSc+FYOJzrcF44gJmXJdslLWHIKNM0zuHmk0qAJJCB10gjAEJxu4RmjKScyRI1SSVQyq7ocIyFsOxCBFLkDVoBx4kJpr+Ro0lUC3RQBz5Vwsb4GuOxtwvc0nUupFZzpBZ0OahLviSCJraJCyO6yPLN3pHkXPfVclYs6iDgsxHVz0rRvbuSZzJLIzuerOxY48Bk9Budula9AE0hNFJQT3Yf/SNv/vD/AHGquxeqPcPsqw9h/wDSVv8ALP8Acaq7F6o9w+ygsvZaZEivXkjEqC3TKMzKGzdW4GWQhhg4Ox8KSLjdkrBvuXEcEHBuLkg48CC5BHvBHsrT4HxKOITJNG7pNGEYI4RhpkSQEMVYdUA6eNbJvOG+Fncn2G6QA+wkQ5A91BNSrqubm5DMy3XDLmddYAZAUMZjOkAdxoyowANIWqPmrBB2jU3DySxfg2tntVhifRy4WXSqq7K2SNzkg5LE+ymfCuG/7LdfWo/5FAcX71jYuvqKk8TeSzCdpGB8iyPGw8wPZUHUlY8X5RkQRrJbyNloJSWBAJ0NrXSVkUHHMXHjtjatteJ2Sd+OxLP4Ce5aSJT4ZRY0Lj2M2PPNBOcHOh+FxuQsjRXhTJxo+EmVbUn5TksPlg1TbUrHIvMj1hDh42LJnGxRipDKQfLypb6+kmlaeRyzudRbocjAXTj1QAAAB0AGOlSz8cgmOq7tTJJgBpoZeS74GAZVKOjv5uApPjmgkeBSWU83Lfh6JGqSSSOLm5OiONCxbBfHXSvvYVUUzgZ64GffUvecaBiNvbwrbxMVLgM0kkpU5XmSsASoO4RQqg74NROaCZ41/m1l/wAPJ/1VxUPUxxr/ADay/wCHk/6q4rDwO4t45DJcRGUIpKRbaHk2CiRs7INyQAc4A6Zqhi8Il+DfC2CpFq0IXbS0rA4YRJ1bT4nYDB3yCKyXMloIFSOORpiql5XcKqvsWWOJV7y+Gpmz44rQklLnJ6b4UZ0oGYsVRSTpXJO1MoJ+1uTLid7SBoLVomlWKNImZWYIqu+7uGbqDqzv0rWukWeN7mOJ1dGZ7jTo5CLK55ZjAwybnRpwRsDkb1HRXEio8auyrIArqDs4VtS6h44YZHlWxf3wkbMcawKyqHSNn0OyktqKux8SMDoMD30RpUtFFAUUU6gbRTqKBtFOooM+qmlqTNNJopS1N1UmaTNApatrh99ymbUgdGUo6ElQ65DDvDdWDKrBhuCvvrTzQTQbV/xKSUBDpRFOUiQaI0PQkJ4t1y7Esc7k1qFqQmmk1Apak1U0mpHhnA57lWaBOYUZVZEILjXsr6fiZ2LdAeuBvQR5ak1VlFnIS6hGJiDNIANWhUYIzNjwDEDPTesMiFSVYFSNiGBBB9oNBnsb2SGRZo20uhyrYDYPTowIPzipP77Lv40P1W1/l1B0lBO/fbd/Gh+q2v8ALo++y7+ND9Vtf5dQVFBO/fbd/Gi+q2v8qj77bv40X1W1/lVA0tBO/fZd/Gi+q2v8ql++y7+NF9Vtf5VQVAoJ377Lv40X1W1/l0v313fxovqtr/KqCpRQTv313fxovqtr/Lo++q7+PF9Vtf5VQYpxUjGQRkAjORkEZBHsI8ao3eJcUluCrSurFF0KFREVV1FsBY1A9ZmPTxrUptLigdRSUUC0UUUQUtJRQLRRRQOooooCiiigUmmk0maQmopdVGabmkJoFJpM0hNJmgXNITSZpuaBxNW30d9oYrO4cyKi8xGXnNzNS6VLIgCdFZ1TJx4dap5NGaDofYbj8D8UL/BRE1xG0Z0PmNW0s8j8srhg4Re7nAIJ31bP7PfAbvjDzc8vHcq55M6MHd7gOjw6x3Ro2YEHoVA3BI5w29ZrO7kikWWNyjocqwxlTjGRnbxNB0Kx7Iw3vE7gIYmtWQtG9s6ARlsCNRGp3caGDAjB3Y9RVem7Ju/E5rCJTGVErxB8tqRFLxln2Ch1x3jsCcHeoXg3FJLWQyxgaikke+dhIjIWBB9YZyPdUl2W7Ty2lykrySNGNKSLs5aJSWWNRIcAaj4EYyaCL4xw821xJbM6u0blGZM6Sy+sBkA7HI94NadSXHuOSXkgmmRBJjSzoukuM90uAcFgO7kAZAGc4qLzQOoptLmgdSimg0oNA7NGaQVNdllj+Eo0hTKd5EdVZHf8VWDEKd9wpZNWMalOMhKdm+zDSAyOAWVQ6RMrOTlGZXeNe840ozCMbsACdiFecbXfG5i4mVVraNRBLDGigPu2NRCgoU0sVcqFXLHRjIkntElml4h8I0SSSRtyBbh01R4jDKzjIdW1DVoEis+koWYI1d7SdpQrGOIgvq1M+xVHzqyMEhpAwB6lVIByzAMhFNeMqSrDDKSCN9iDgjffrSUEknJJJO5JOSSepJPU0tVRRQKKAoFLQBQFFOoogoopaAooxRQJiloxRQa+qjVWPNGain6qTVTM0ZoHaqNVMzSZoMhakzTM0ZoHZpCabmjNA7NJmm5ozQLmjNNooFzRmm5ozQLmlzTc0maDIDSg1jzThQZAaWmA09aCYHaC45Jh17HYvvzCmnRoLZ3Gkkasa9J06tPdqMFMApwqh4paaKcKIBS0lLQFOFNFOFAAUuKKWgSloooCjFKKWgbRS4ooP//Z' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color:'gold',fontSize:'20px'}}>Full Stack Blog Application</p>
                    <ul className='post-details' style={{display:'flex',flexWrap:'wrap'}}>
                        <li>Programmed a code for Full Stack Blog Application using MERN Stack</li>
                        <li>Users can view and write their own ideas in this blog application</li>
                    </ul>
                    <div style={{ display: 'flex' }}> 
                        <a href='https://github.com/UdayShankhar/FullStack-BlogApplication' target="_blank" style={{ marginLeft: '130px', marginTop: '16px',fontSize:'20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='e-commerce'>
                    <img className='project-img' src='https://dashtechinc.com/wp-content/uploads/2020/02/E-Commerce-in-our-daily-life.jpg' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>Full Stack E-Commerce Application</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Programmed a code for Full Stack E-Commerce Application using MERN Stack</li>
                        <li>Users can buy things from the comfort of their home</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/ECommerce-FullStack' target="_blank" style={{ marginLeft: '130px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span ><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }}/></span>
                        </a>
                    </div>
                </article>


                <article className='covid'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r0CpT8B8c18zhR_QILDHZY-ElmV3FZ3vZQ&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>COVID-19 tracker application</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Fetched live data of COVID-19 cases using official govt API in React Axios</li>
                        <li>The Application displays day-today COVID-19 cases all over India</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/COVID-tracker-application' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }}/></span>   
                        </a>

                        <a href='https://625d4b4913f19e33f13a4597--comforting-cranachan-3f8add.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>

                </article>


                <article className='contact-book'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDMM9gp0OIqYxqlaP7c7S56a3HTByzEyrcQ&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>Contacts Book application</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Designed and developed a contacts book application for desktop</li>
                        <li>The Application is mainly created using React JS,Redux and React-Router-DOM</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Contacts-book-using-React' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://6223846832fd9617fe54af6a--distracted-mahavira-d29aca.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

            </div>

{/* 
            <div className='cards1'>

                <article className='covid'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r0CpT8B8c18zhR_QILDHZY-ElmV3FZ3vZQ&usqp=CAU' alt='' />
                    <p className='project-title'>Covid-19 tracker application</p>
                    <div style={{ display: 'flex' }} >

                        <a href='https://github.com/UdayShankhar/COVID-tracker-application' target="_blank" style={{ marginLeft: '70px', marginTop: '38px' }}>GITHUB
                        </a>

                        <a href='https://625d4b4913f19e33f13a4597--comforting-cranachan-3f8add.netlify.app/' target="_blank" style={{ marginLeft: '46px', marginTop: '38px' }}>WEBSITE
                        </a>
                    </div>

                </article>

                <article className='contact-book'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDMM9gp0OIqYxqlaP7c7S56a3HTByzEyrcQ&usqp=CAU' alt='' />
                    <p className='project-title' style={{ marginLeft: '6px', marginRight: "3px" }}>Contacts book manager application using React JS and Redux</p>
                    <div style={{ display: 'flex' }} >

                        <a href='https://github.com/UdayShankhar/Contacts-book-using-React' target="_blank" style={{ marginLeft: '70px', marginTop: '14px' }}>GITHUB
                        </a>

                        <a href='https://6223846832fd9617fe54af6a--distracted-mahavira-d29aca.netlify.app/' target="_blank" style={{ marginLeft: '56px', marginTop: '14px' }}>WEBSITE
                        </a>
                    </div>

                </article>
            </div> */}

            <div className='cards2'>

                <article className='apple'>
                    <img className='project-img' src='data:image/png;base64,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' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>Apple website</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>A new look of Apple Website in dark mode</li>
                        <li>The application displays few Apple's latest products</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Apple-website-clone' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '30px' }} /></span>
                        </a>

                        <a href='https://625f0dc9c1e6622540f00db4--sensational-treacle-ab6769.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '30px' }} /></span>
                        </a>
                    </div>
                </article>

                

                <article className='tictactoe'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wmORpoK2HVkOsOfI2OSjqMN9DmQJDTIHDA&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>Tic Tac Toe application</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Designed and developed a Tic Tac Toe game using HTML5, CSS3 and JavaScript</li>
                        <li>The application was mainly developed with the base of Array algorithm</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Tic-Tac-Toe' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://joyful-bubblegum-deb73f.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                

                <article className='todo'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDWAF0BMffrdgUnDav0U4iLI2rgnSlKzPnQ&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>to do application</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Developed a ToDo application using React JS</li>
                        <li>The application is a fun,flexible and free way to organize our plans,projecs and more</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/React-todo-application' target="_blank" style={{ marginLeft: '60px', marginTop: '46px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://623cbc333873f6263508f363--aesthetic-sorbet-c7cad2.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '46px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='hotel-booking'>
                    <img className='project-img' src='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>COFFEE SHOP WEBSITE</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Designed a website for a coffee shop from scratch using HTML5, CSS3 and JavaScript</li>
                        <li>The application allows users to browse coffee types and the cafe gallery</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/coffee-shop' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://626442bb7fb7376dc590ac10--thriving-pixie-caa2fa.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='weather'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_eNsvrvKXFUAXQ3JfsFGuPNLsm_0XOpFoxvkrnh2ncTCHw8-RHl3EOlctFELZCVQ76o&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>Weather application</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Created a Weather application by fetching live data from WeatherMap API </li>
                        <li>The Application displays current weather of cities across the world</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Weather-application' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://62616ae1d8391c780a26503a--benevolent-quokka-5829c1.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='swiggy'>
                    <img className='project-img' src='https://miro.medium.com/max/1000/1*fpW1jv595xjp0G1LiaLEjQ.jpeg' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>SWIGGY website</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Designed Swiggy's homepage of website using React JS</li>
                        <li>The application allows users to browse restaurants and on-going offers</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/React-Swiggy-clone' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://6267dbdde69c601fa0122dbc--quiet-biscotti-ffb75f.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='tripadvisor'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTjPhe5gsFz9AuUIkxDxDIyhpo124FSgnuQ&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>tripadvisor website</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Designed TripAdvisor's homepage using React JS</li>
                        <li>The application allows users to browse various vacation spots and their estimated prices</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Tripadvisor-Clone' target="_blank" style={{ marginLeft: '60px', marginTop: '40px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://cranky-lovelace-36802e.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '40px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                

                <article className='bookreading'>
                    <img className='project-img' src='data:image/jpeg;base64,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' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>BOOK READING APPLICATION</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Developed a bookreading application using Vanilla JavaScript</li>
                        <li>The application transforms words from physical book to a audio format</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Audio-BookReader' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://626246eea81b452e0f85d326--sparkly-raindrop-a56230.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>
            </div>

            {/* <h3 className='stack1' style={{ marginTop: '40px' }} >HTML,CSS,JavaScript projects<b> (Desktop version)</b></h3> */}

            <div className='cards3'>

                

                <article className='imgslider'>
                    <img className='project-img' src='data:image/jpeg;base64,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' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>IMAGE SLIDER</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Developed an Image-Slider application using HTML5, CSS3 and JavaScript</li>
                        <li>The application allows users to view images in the website.</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Image-Gallery' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://silly-carson-7adad9.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='quote'>
                    <img className='project-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPs3kfTd5IK9eU7mSaASLH0B2cDExiytSbg&usqp=CAU' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>QUOTE GENERATOR</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Designed and Developed a quote generator application using HTML5, CSS3 and JavaScript</li>
                        <li>Allows users to generate quotes with a click of a button</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Quote-Generator' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://kind-wilson-04ba26.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='youtube'>
                    <img className='project-img' src='https://blog.efmdglobal.org/wp-content/uploads/2020/05/Online_lessons_Grenoble-scaled-e1589966744685.jpg' alt='' />
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '16px', color: 'gold', fontSize: '20px' }}>EDUCATIONAL WEBSITE DESIGN</p>
                    <ul className='post-details' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <li>Educational Website designed from stratch using HTML ,CSS3 and JQuery</li>
                        <li>The application allows users to browse courses offered and other relevant information</li>
                    </ul>
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar/Educational-Website' target="_blank" style={{ marginLeft: '60px', marginTop: '16px', fontSize: '20px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>

                        <a href='https://625ef1081b4b2d4146415274--tourmaline-kitsune-6f9142.netlify.app/' target="_blank" style={{ marginLeft: '30px', marginTop: '16px', fontSize: '20px' }}>
                            WEBSITE<span><LanguageIcon style={{ marginLeft: '6px', fontSize: '16px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

                <article className='chat'>
                    <p className='project-title' style={{ textTransform: 'uppercase', marginTop: '166px', color: 'gold', fontSize: '30px' }}>+ 30 more projects</p>
            
                    <div style={{ display: 'flex' }}>
                        <a href='https://github.com/UdayShankhar?tab=repositories' target="_blank" style={{ marginLeft: '110px', marginTop: '16px', fontSize: '30px' }}>
                            GITHUB<span><GitHubIcon style={{ marginLeft: '6px', fontSize: '26px', marginTop: '2px' }} /></span>
                        </a>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default Myportd