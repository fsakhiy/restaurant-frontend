interface FoodData {
  message: string;
  detail: {
    data: {
      uuid: string,
      name: string,
      price: number,
      description: string | null,
    }[],
     meta: {
      currentPage: number,
      nextPage: number | null,
      itemsShowed: number,
      totalItems: number,
    },
  },
}

export default async function Home() {
  async function getData(): Promise<FoodData> {
    const data = await fetch('http://localhost:3300/food')

    if(!data.ok) {
      throw new Error('failed to fetch data')
    }

    const jsonData: FoodData = await data.json()
    return jsonData
  }
  const data = await getData()

  return (
    <div>
      hello world
      {data.detail.data.map((food) => (
        <div key={food.uuid}>{food.name}</div>
      ))}
    </div>
  )
}