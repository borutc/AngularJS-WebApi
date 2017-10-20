CREATE TABLE [dbo].[Table] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [firstName] VARCHAR (30) NOT NULL,
    [lastName]  VARCHAR (30) NOT NULL,
    [address]   VARCHAR (30) NOT NULL,
    [birthday]  DATE         NOT NULL,
    [created]   VARCHAR (30) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

