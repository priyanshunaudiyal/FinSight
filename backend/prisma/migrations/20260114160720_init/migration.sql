-- CreateTable
CREATE TABLE "Chart" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChartPoint" (
    "id" SERIAL NOT NULL,
    "chartId" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ChartPoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChartPoint" ADD CONSTRAINT "ChartPoint_chartId_fkey" FOREIGN KEY ("chartId") REFERENCES "Chart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
