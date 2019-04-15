SELECT k.Kunde_ID, k.Firma, a.Bezeichnung, p.Verkaufs_Einzelpreis, p.Menge, (p.Verkaufs_Einzelpreis * p.Menge) AS Summe, r.Rechnung_ID FROM

(
    (
        Artikel AS a INNER JOIN Position as p ON a.Artikel_ID=p.Artikel_ID
    )

    INNER JOIN Rechnung AS r ON p.Rechnung_ID = r.Rechnung_ID
)

INNER JOIN Kunde AS k ON r.Kunde_ID = k.Kunde_ID ORDER BY k.Firma

/**/

select a.Bezeichnung, p.Umsatz
from artikel a
inner join
(
  select Artikel_ID, SUM(Verkaufs_Einzelpreis*Menge) as Umsatz
  from Position
  group by Artikel_ID
) p on p.Artikel_ID = a.Artikel_ID;

/**/

SELECT k.Kunde_ID, k.Firma, a.Bezeichnung, SUM(p.Verkaufs_Einzelpreis*p.Menge) AS Umsatz FROM

(
    (
        Artikel AS a INNER JOIN Position AS p ON a.Artikel_ID=p.Artikel_ID
    )

    INNER JOIN Rechnung AS r ON p.Rechnung_ID = r.Rechnung_ID
)

INNER JOIN Kunde AS k ON r.Kunde_ID = k.Kunde_ID GROUP BY k.Kunde_ID, k.Firma, a.Bezeichnung

/**/

CREATE TABLE Artikelgruppe (Artikelgruppe_ID INTEGER, Bezeichnung CHAR, PRIMARY KEY(Artikelgruppe_ID))

/**/

ALTER TABLE Artikel ADD COLUMN Artikelgruppe_ID INTEGER
ALTER TABLE Artikel ADD FOREIGN KEY(Artikelgruppe_ID) REFERENCES Artikelgruppe(Artikelgruppe_ID)