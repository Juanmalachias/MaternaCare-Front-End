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
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-2" >
                        <p className='text-black'>ENTENDA POR QUE O LEITE MATERNO É MELHOR ESCOLHA DA MÃE PARA O BEBÊ</p>
                    </div>
                    <div className='flex items-center px-40 py-8 mb-20'>
                        <div className='pr-09'>
                            <img src={imag1} />
                        </div>
                        <div className=' paragrafos pl-8 '>
                            <p>- O leite materno já vem pronto, com temperatura e sabor ideais para o bebê;</p>
                            <p>- Contém todos os nutrientes necessários para o desenvolvimento saudável do bebê;</p>
                            <p>-  É facilmente digerido e protege contra várias doenças, incluindo respiratórias, gastrointestinais e anemia;</p>
                            <p>- Reduz o risco de alergias e fornece anticorpos, protegendo contra infecções;</p>
                            <p>- Não há risco de contaminação, pois vai diretamente da mama para a boca do bebê;</p>
                            <p >- Fortalece a musculatura facial, prepara para mastigação e fala, além de criar um vínculo emocional seguro e amoroso entre mãe e filho;</p>

                            <p className='font-bold'>Vantagens do aleitamento materno para a mãe</p>
                            <p>- O leite está sempre pronto e livre de contaminação, não exigindo preparação; </p>
                            <p>- É economicamente mais acessível do que fórmulas infantis;</p>
                            <p>- Reduz o sangramento após o parto e ajuda a mãe a retornar ao peso original mais rapidamente;</p>
                            <p>- Ajuda na prevenção do câncer de mama, ovário e útero;</p>
                            <p>- Contribui para a prevenção da osteoporose;</p>
                        </div>
                    </div>
                    <div  className="telemedicina  flex flex-col items-center justify-center py-4 mb-2" >
                        <p className='text-black'>SAIBA TODAS AS VACINAS QUE SEU BEBÊ DEVE TOMAR NOS PRIMEIROS MESES DE VIDA</p>
                    </div>
                    <div className='flex items-center px-40 py-8 mb-20'>
                        <div className='pr-09'>
                            <img src={imag2} />
                        </div>
                        <div className=' paragrafos pl-8 '>
                            <p className='font-bold'>Vacinando de 0 a 6 meses:</p>
                            <p>BCG: ao nascer; somente após o teste do pezinho</p>
                            <p>Hepatite B: ao nascer, 2 meses e 6 meses;</p>
                            <p>Rotavírus: 2 meses, 4 meses e 6 meses;</p>
                            <p>Tríplice bacteriana (tétano, difteria e coqueluche): 2 meses, 4 meses e 6 meses;</p>
                            <p>Poliomielite: 2 meses, 4 meses e 6 meses;</p>
                            <p>Haemophilus influenzae B: 2 meses, 4 meses e 6 meses;</p>
                            <p>Pneumocócica conjugada: 2 meses, 4 meses e 6 meses;</p>
                            <p>Meningite ACWY e B: 3 meses e 5 meses;</p>
                            <p>Influenza: 6 meses (1ª dose).</p>
                            <p className='font-bold'>Vacinando de 7 a 18 meses:</p>
                            <p>Febre Amarela: 9 meses;</p>
                            <p>Poliomielite: entre 15 e 18 meses;</p>
                            <p>Meningite ACWY e B: entre 12 meses e 15 meses;</p>
                            <p>Sarampo, Caxumba e Rubéola: 12 meses e 15 meses;</p>
                            <p>Catapora: 12 meses e 15 meses;</p>
                            <p>Hepatite A: 12 meses e 18 meses.</p>
                        </div>
                    </div>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-2" >
                        <p className='text-black'>MANOBRA DE HEIMLICH - MANOBRA DE DESENGASGO :CONHECIMENTO QUE SALVA VIDAS</p>
                    </div>
                    <div className='flex items-center px-40 py-8 '>
                        <div className='pr-09'>
                            <img src={imag3} />
                        </div>
                        <div className=' paragrafos pl-8 '>
                            <p>Para mães de recém-nascidos, entender as manobras de desengasgo é uma habilidade crucial. Embora esperemos o melhor, estar preparado para agir em situações de emergência é essencial.</p>

                            <p className='font-bold'>Manejo Inicial:</p>
                            <p>Posicionamento Seguro: Mantenha o bebê de bruços em seu antebraço, com a cabeça mais baixa que o corpo, apoiando-a em sua mão.</p>
                            <p>Tapas nas Costas: Suavemente, dê tapas nas costas do bebê entre as omoplatas para estimular a tosse e liberar possíveis obstruções.</p>
                            <p>Se a Obstrução Persistir:</p>

                            <p>Compressões Torácicas: Vire o bebê de costas em seu antebraço, com a cabeça mais alta que o corpo, e realize compressões torácicas com dois dedos, abaixo da linha dos mamilos.</p>

                            <p className='font-bold'>Dicas Importantes:</p>
                            <p>Evite Objetos Pequenos: Mantenha pequenos objetos, como brinquedos e alimentos, fora do alcance do bebê para prevenir engasgos.</p>

                        </div>

                    </div>
                    <div className='px-20 mb-10'>
                        <p>Aprenda Técnicas de Ressuscitação: Conhecer as técnicas de ressuscitação cardiopulmonar (RCP) infantil é valioso.
                            Em qualquer situação de emergência, chame ajuda profissional imediatamente ligue : 192 (Samu) ou para o 193 (Corpo de Bombeiros).</p>
                        <a href="https://www.youtube.com/watch?v=2X8dho2dEko">Assista o vídeo da manobra clicando aqui</a>
                    </div>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 mb-10" >
                        <p className='text-black'>Um tributo à força silenciosa que molda o mundo: as mães</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mb-10'>
                        <iframe 
                         width="560" 
                         height="315" 
                         src="https://www.youtube.com/embed/7Qdeqrclwjc?si=SdYJFQ0elaQ8oOEy" 
                         title="YouTube video player" 
                         frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                         allowfullscreen></iframe>
                    </div>
                </div>










            </div >
        </>

    );
}

export default dicas;