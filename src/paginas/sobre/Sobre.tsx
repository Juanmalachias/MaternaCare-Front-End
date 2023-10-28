import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import './Sobre.css'
import FotoODS from '../../assets/ods3.webp'

function Sobre() {

    const people = [
        {
            name: "Antonio Kerr",
            cargo: "Desenvolvedor",
            href: "https://github.com/TonyKerr07",
            linkedin: "https://www.linkedin.com/in/antoniokerr/",
            imageSrc:
                "https://github.com/TonyKerr07.png",
            imageAlt: "Integrante do projeto",
        },
        {
            name: "Juan Malachias",
            cargo: "Desenvolvedor",
            href: "https://github.com/Juanmalachias",
            linkedin: "https://www.linkedin.com/in/juanmalachias/",
            imageSrc:
                "https://github.com/Juanmalachias.png",
            imageAlt: "Integrante do projeto",
        },
        {
            name: "Lucas Nascimento",
            cargo: "Desenvolvedor",
            href: "https://github.com/lucas-nasc",
            linkedin: "https://www.linkedin.com/in/lucasnascimentosilva/",
            imageSrc:
                "https://github.com/lucas-nasc.png",
            imageAlt: "Integrante do projeto",
        },
        {
            name: "Patricia Soldo",
            cargo: "Desenvolvedor",
            href: "https://github.com/PatiSoldo",
            linkedin: "https://www.linkedin.com/in/patriciasoldo/",
            imageSrc:
                "https://github.com/PatiSoldo.png",
            imageAlt: "Integrante do projeto",
        },
        {
            name: "Steffanie Manini",
            cargo: "Desenvolvedor",
            href: "https://github.com/stefmanini",
            linkedin: "https://www.linkedin.com/in/steffaniemanini/",
            imageSrc:
                "https://github.com/stefmanini.png",
            imageAlt: "Integrante do projeto",
        },
        {
            name: "Thiago Reis",
            cargo: "Desenvolvedor",
            href: "https://github.com/ThiagoReisFreitas",
            linkedin: "https://www.linkedin.com/in/thiagoreisfreitas/",
            imageSrc:
                "https://github.com/ThiagoReisFreitas.png",
            imageAlt: "Integrante do projeto",
        }
    ];

    return (
        <>
            <div className="">
                <div className=''>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 font-bold" >
                        <p className=''>ODS</p>
                    </div>

                    <div className="flex  mx-auto  px-20 pb-[50px] ODSConfig">
                        <div className='fotoODS'>
                            <img src={FotoODS} alt="" />
                        </div>
                        <div className='TextoODS'>
                            <p>3.1. Até 2030, reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos;</p>
                            <br />
                            <p>3.2. Até 2030, acabar com as mortes evitáveis de recém-nascidos e crianças menores de 5 anos, com todos os países objetivando reduzir a mortalidade neonatal para pelo menos 12 por 1.000 nascidos vivos e a mortalidade de crianças menores de 5 anos para pelo menos 25 por 1.000 nascidos vivos;</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mx-auto pb-[50px] divEquipe">
                    <div className="FaixaEquipe  flex flex-col items-center justify-center py-4 font-bold" >
                        <p className=''>Equipe</p>
                    </div>
                    <p className="text-center ODSConfig">
                        Nossa equipe é composta por desenvolvedores engajados, comprometidos
                        e recém-formados na Generation Brasil!
                        <br />
                        Juntos, transformamos códigos
                        em soluções extraordinárias.
                    </p>
                </div>

                <div className=" flex justify-center">
                    <div className="flex  items-center   justify-center ">
                        {people.map((dev) => (
                            <div className="flex  flex-col items-center hover:scale-125  duration-300 ">
                                <div className=" w-1/2">
                                    <a href={dev.href} target="_blank">
                                        <img
                                            src={dev.imageSrc}
                                            alt={dev.imageAlt}
                                            className="cursor-pointer "
                                        />

                                    </a>
                                </div>
                                <div className="flex justify-center ">
                                    <div className='flex-col justify-center items-center'>
                                        <h3 className="text-xl text-center text-black font-bold  mb-2 hover:text-teal-300 ">
                                            <a href={dev.href}>
                                                <span aria-hidden="true" className="" />
                                                {dev.name}
                                            </a>
                                        </h3>
                                        <p className='text-center mt-[-10px] text-black'> {dev.cargo} </p>

                                        <div className='mt-2 flex gap-x-2 justify-center mb-20'>
                                            <a href={dev.href} target="_blank"><GithubLogo className="text-black w-9 h-9 cursor-pointer hover:text-verde_claro1 dark:hover:text-verde_claro2 transition-all duration-300 ease-in-out " /></a>
                                            <a href={dev.linkedin} target="_blank"><LinkedinLogo className="text-black w-9 h-9 cursor-pointer hover:text-verde_claro1 dark:hover:text-verde_claro2 transition-all duration-300 ease-in-out" /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sobre;