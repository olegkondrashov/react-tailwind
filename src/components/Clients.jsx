import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] h-[40px] sm:h-[70px] mt-[10px] mb-[10px] hover:bg-gradient-to-r hover:from-white hover:to-cyan-300 rounded-full cursor-pointer`}>
                    <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
                </div>
            ))}
        </div>
    </section>
)

export default Clients;