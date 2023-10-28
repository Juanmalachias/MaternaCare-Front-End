import React from 'react';
import imag1 from '../../assets/posições para amamentação 1.png'
import imag2 from '../../assets//VACINA 1.png'
import imag3 from '../../assets/incorpore-manobra-de-heimlich-1110x550 1.png'

import './dicas.css';



function dicas() {
    return (
        <>
            <div>
                <div className=''>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-2 font-bold" >
                        <p className=''>Entenda por que o leite materno é a melhor escolha da mãe para o bebê</p>
                    </div>
                    <div className='flex items-center px-40 py-8 mb-20'>
                        <div className='imagemLeite'>
                            <img src={imag1} />
                        </div>
                        <div className=' paragrafos pl-8 '>
                            <p>- O leite materno já vem pronto, com temperatura e sabor ideais para o bebê;</p>
                            <p>- Contém todos os nutrientes necessários para o desenvolvimento saudável do bebê;</p>
                            <p>-  É facilmente digerido e protege contra várias doenças, incluindo respiratórias, gastrointestinais e anemia;</p>
                            <p>- Reduz o risco de alergias e fornece anticorpos, protegendo contra infecções;</p>
                            <p>- Não há risco de contaminação, pois vai diretamente da mama para a boca do bebê;</p>
                            <p >- Fortalece a musculatura facial, prepara para mastigação e fala, além de criar um vínculo emocional seguro e amoroso entre mãe e filho;</p>

                            <p className='font-bold'>Vantagens do aleitamento materno para a mãe:</p>
                            <p>- O leite está sempre pronto e livre de contaminação, não exigindo preparação; </p>
                            <p>- É economicamente mais acessível do que fórmulas infantis;</p>
                            <p>- Reduz o sangramento após o parto e ajuda a mãe a retornar ao peso original mais rapidamente;</p>
                            <p>- Ajuda na prevenção do câncer de mama, ovário e útero;</p>
                            <p>- Contribui para a prevenção da osteoporose;</p>
                        </div>
                    </div>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-2 font-bold" >
                        <p className=''>Saiba todas as vacinas que seu bebê deve tomar nos primeiros meses de vida</p>
                    </div>
                    <div className='flex items-center px-40 py-8 '>
                        <div className='imagemVacina'>
                            <img src={imag2} />
                        </div>
                        <div className=' paragrafos pl-8 '>
                            <p>BCG: ao nascer; somente após o teste do pezinho</p>
                            <p>Hepatite B: ao nascer, 2 meses e 6 meses;</p>
                            <p>Rotavírus: 2 meses, 4 meses e 6 meses;</p>
                            <p>Tríplice bacteriana (tétano, difteria e coqueluche): 2 meses, 4 meses e 6 meses;</p>
                            <p>Poliomielite: 2 meses, 4 meses e 6 meses;</p>
                            <p>Haemophilus influenzae B: 2 meses, 4 meses e 6 meses;</p>
                            <p>Pneumocócica conjugada: 2 meses, 4 meses e 6 meses;</p>
                            <p>Meningite ACWY e B: 3 meses e 5 meses;</p>
                            <p>Influenza: 6 meses (1ª dose).</p>
                            <p>Febre Amarela: 9 meses;</p>
                            <p>Poliomielite: entre 15 e 18 meses;</p>
                            <p>Meningite ACWY e B: entre 12 meses e 15 meses;</p>
                            <p>Sarampo, Caxumba e Rubéola: 12 meses e 15 meses;</p>
                            <p>Catapora: 12 meses e 15 meses;</p>
                            <p>Hepatite A: 12 meses e 18 meses.</p>
                        </div>

                    </div>
                    <div className='flex flex-col items-center justify-center mb-10'>
                        <p>Se você quer saber sobre todas as campanhas de vacinação <a href="https://www.gov.br/saude/pt-br/campanhas-da-saude/2023/multivacinacao/?utm_source=google&utm_medium=cpc&utm_campaign=multivacinacao-SP&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFNSmIFuaceg2GKcTuZSQPW5vsgsyQAkfQms1YLpA_uGT3Lhw2SZxDBoCz4IQAvD_BwE" className='underline' target='blank_'>clique aqui</a> e  não deixe de proteger seu filho.</p>

                    </div>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-2 font-bold" >
                        <p className=''>Manobra de HEIMLICH - Manobra de desengasgo: Conhecimento que salva vidas</p>
                    </div>
                    <p className='flex items-center px-40 py-4'>Para mães de recém-nascidos, entender as manobras de desengasgo é uma habilidade crucial. Embora esperemos o melhor, estar preparado para agir em situações de emergência é essencial.</p>

                    <div className='flex items-center px-40  '>
                        <div className='imagemManobra'>
                            <img src={imag3} />
                        </div>

                        <div className=' paragrafos pl-8 '>

                            <p className='font-bold'>Manejo Inicial:</p>
                            <p>Posicionamento Seguro: Mantenha o bebê de bruços em seu antebraço, com a cabeça mais baixa que o corpo, apoiando-a em sua mão.</p>
                            <p>Tapas nas Costas: Suavemente, dê tapas nas costas do bebê entre as omoplatas para estimular a tosse e liberar possíveis obstruções.</p>
                            <p>Se a Obstrução Persistir:</p>

                            <p>Compressões Torácicas: Vire o bebê de costas em seu antebraço, com a cabeça mais alta que o corpo, e realize compressões torácicas com dois dedos, abaixo da linha dos mamilos.</p>

                        </div>

                    </div>
                    <div className='flex flex-col  px-40 '>
                        <p className='font-bold'>Dicas Importantes:</p>
                        <p>Evite Objetos Pequenos: Mantenha pequenos objetos, como brinquedos e alimentos, fora do alcance do bebê para prevenir engasgos.</p>
                    </div>

                    <div className='px-40 mb-10'>
                        <p>Aprenda Técnicas de Ressuscitação: Conhecer as técnicas de ressuscitação cardiopulmonar (RCP) infantil é valioso.
                            Em qualquer situação de emergência, chame ajuda profissional imediatamente ligue:
                        </p>
                        <p className='text-center font-bold py-4'>
                            192 (Samu) ou para o 193 (Corpo de Bombeiros).
                        </p>
                        <div className='flex flex-col items-center justify-center mb-10 '>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/2X8dho2dEko?si=p8q9Y-nHhEmAooFU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-2 font-bold" >
                        <p className=''>Um tributo à força silenciosa que molda o mundo: as mães</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mb-10'>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/7Qdeqrclwjc?si=SdYJFQ0elaQ8oOEy"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>










            </div >
        </>

    );
}

export default dicas;