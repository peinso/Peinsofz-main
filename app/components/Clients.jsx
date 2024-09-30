import Image from "next/image";
import Marquee from "react-fast-marquee";
import GetClients from "@/lib/GetClients";

const Client = ({ logo }) => {
  return (
    <figure className="mx-4 ">
      {" "}
      {logo && (
        <Image
          className="rounded-2xl shadow-md drop-shadow-md shadow-[#091242] aspect-video "
          src={logo}
          width={250}
          height={250}
          alt="clients"
        />
      )}
    </figure>
  );
};

async function Clients() {
  const Clients = await GetClients();

  return (
    <Marquee pauseOnHover>
      <div
        className={`flex bg-main py-12 justify-center   items-center gap-24 rounded-md`}
      >
        {Clients.data.map((client) => (
          <Client key={client.id} logo={client.logo} />
        ))}
      </div>
    </Marquee>
  );
}

export default Clients;
