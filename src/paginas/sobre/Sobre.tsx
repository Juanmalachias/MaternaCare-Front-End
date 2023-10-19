import { GithubLogo } from '@phosphor-icons/react'
import { LinkedinLogo } from '@phosphor-icons/react'
import './Sobre.css'

function Sobre() {

    const people = [
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
            name: "Patricia Soldo",
            cargo: "Desenvolvedor",
            href: "https://github.com/PatiSoldo",
            linkedin: "https://www.linkedin.com/in/patriciasoldo/",
            imageSrc:
                "https://github.com/PatiSoldo.png",
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
        },       
        {
            name: "Antonio Carlos",
            cargo: "Desenvolvedor",
            href: "https://github.com/TonyKerr07",
            linkedin: "https://www.linkedin.com/in/antoniokerr/",
            imageSrc:
                "https://github.com/TonyKerr07.png",
            imageAlt: "Integrante do projeto",
        },       
        {
            name: "Lucas Nascimentos",
            cargo: "Desenvolvedor",
            href: "https://github.com/lucas-nasc",
            linkedin: "https://www.linkedin.com/in/lucasnascimentosilva/",
            imageSrc:
                "https://github.com/lucas-nasc.png",
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
        }

    ];

    return (
        <>
            <div className="bg-white ">
                <div className="mx-auto max-w-2xl px-4 pb-[50px] ">
                    <h2 className="text-3xl font-bold  text-black text-center mb-4">
                        Sobre a equipe
                    </h2>
                    <h2 className="text-center text-lg text-gray-90">
                        Nossa equipe é composta por desenvolvedores engajados, comprometidos
                        e recém-formados na Generation Brasil! Juntos, transformamos códigos
                        em soluções extraordinárias.
                    </h2>
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

                                        <div className='mt-2 flex gap-x-2 justify-center'>
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