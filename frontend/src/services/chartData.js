export const chartDataMap = {
  btc: {
    title: "Bitcoin",
    datasets: {
      price: {
        label: "Price (USD)",
        ranges: {
          "1M": [
            { date: "Week 1", value: 42000 },
            { date: "Week 2", value: 44000 },
            { date: "Week 3", value: 46000 },
            { date: "Week 4", value: 45000 },
          ],
          "3M": [
            { date: "Jan", value: 42000 },
            { date: "Feb", value: 45000 },
            { date: "Mar", value: 47000 },
          ],
        },
      },
      volume: {
        label: "Volume",
        ranges: {
          "1M": [
            { date: "Week 1", value: 320 },
            { date: "Week 2", value: 410 },
            { date: "Week 3", value: 380 },
            { date: "Week 4", value: 460 },
          ],
          "3M": [
            { date: "Jan", value: 300 },
            { date: "Feb", value: 420 },
            { date: "Mar", value: 510 },
          ],
        },
      },
    },
  },
};
