import moment from "moment"

/* eslint-disable @typescript-eslint/no-explicit-any */
const Home = () => {
    const data: object[] = [
        {
            id: '01',
            doctor: 'Julio Enrique',
            specialty: 'Dentista',
            address: 'Calle San Martín',
            date: '2025-03-10T23:11:27.317Z'
        },
        {
            id: '02',
            doctor: 'Julio Enrique',
            specialty: 'Dentista',
            address: 'Calle San Martín',
            date: '2025-03-16T23:11:27.317Z'
        },
        {
            id: '03',
            doctor: 'Julio Enrique',
            specialty: 'Dentista',
            address: 'Calle San Martín',
            date: '2025-03-14T23:11:27.317Z'
        },
        {
            id: '04',
            doctor: 'Julio Enrique',
            specialty: 'Dentista',
            address: 'Calle San Martín',
            date: '2025-03-11T23:11:27.317Z'
        },
        {
            id: '05',
            doctor: 'Julio Enrique',
            specialty: 'Dentista',
            address: 'Calle San Martín',
            date: '2025-03-24T23:11:27.317Z'
        },
    ]

    const getDayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves' , 'Viernes', 'Santiago']

  return (
    <div className="flex justify-center">
        <div className="w-[90%] h-dvh bg-white">
        {data?.map((e: any) => (
            <div key={e?.id} className="flex justify-between items-center m-2 border border-black">
                <div className="w-full flex ">
                    <div className="flex flex-col justify-center items-center w-[10%] m-1 border-r border-gray-400">
                        <div className="text-5xl">
                            {moment(e?.date).date()}
                        </div>
                        <div className="text-base">
                            {getDayOfWeek[moment(e?.date).day()]}
                        </div>
                    </div>
                    <div className="tex-base ml-2">
                        <p>
                            {`${e?.doctor}`} <span className="text-sm">{`(${e?.specialty})`}</span>
                        </p>
                        <p className="text-sm">
                            {`${e?.address}`}
                        </p>
                    </div>
                </div>
                <div className="m-5">
                    <button className="border border-black rounded-[5px] p-2 cursor-pointer">Reservar</button>
                </div>
            </div>        
        ))}
        </div>
    </div>
  )
}

export default Home