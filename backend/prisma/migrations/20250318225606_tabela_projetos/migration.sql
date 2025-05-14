-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagens" TEXT[],
    "nivel" INTEGER NOT NULL,
    "destaque" BOOLEAN NOT NULL,
    "repositorios" TEXT[],

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);
