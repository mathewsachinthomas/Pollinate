Ingest:
Azure data factory has been used to ingest data HighestGrossers.csv to Azure sql database.


Data Modelling:

1) Created 2 tables that is fact table Fact_moviestatistics and Dimension table DI_movie.
2) Fact table has primary key movied_id and is a foreign key in Dimension table.
3) New dimension table movie will have all the details on movie.
4) There can be more dimension tables which can seperate the ticket details and sales details.
5) Please refer daigram in file data modelling.pdf for details on the fields.

