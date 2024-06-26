import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import { CheckCircle2, ChevronsRight } from 'lucide-react'


const page = () => {
  return (
    <Container cls="" headerBgImg={"/tourcontrol.jpeg"} header={<h2 className='text-center justify-center items-center flex w-full text-5xl'><ChevronsRight size={40} />Notre mission</h2>}>
       <Section padding={"250px"} cls={"flex flex-col gap-5"}>
            
            <p className='text-justify'>La mission fondamentale de la Régie des voies aériennes est de gérer l'ensemble du patrimoine du pays relevant de sa compétence en vue d'assure la sécurité de la navigation aérienne selon les normes de l'organisation de l'aviation civile internationale (OACI)</p>
            <p className='text-justify mb-7 text-3xl text-indigo-700 underline'>Les missions Confiées à la RVA sont : </p>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-5 w-1/2 italic'>
                    <div className='text-justify items-center flex gap-3'><CheckCircle2 size={20} color='green' colorInterpolation={"green"} enableBackground={true} /> Construire, aménager, entretenir et exploiter les aéroports et leurs dépendances;</div>
                    <div className='text-justify items-center flex gap-3'><CheckCircle2 size={20} /> Assurer la sécurité de la navigation aérienne;</div>
                </div>
                <div className='flex flex-col gap-5 w-1/2 italic'>    
                    <div className='text-justify items-center flex gap-3'><CheckCircle2 size={50} /> Percevoir pour son compte les taxes et redevances instituées par le gouvernement sur les aéroports et leurs dépendances, (aérogares ,bâtiments , hangars);</div>
                    <div className='text-justify items-center flex gap-3'><CheckCircle2 size={50} /> Participer , avec les autorités compétentes, à l'elaboration des plans de formation et de perfectionnement du personnel de l'aéronautique civile. </div>
                    <div className='text-justify items-center flex gap-3'><CheckCircle2 size={50} /> Grâce à son appareillage, ses télécommunications et les systèmes d'aide à la navigation aérienne dont elle dispose , elle assure le guidage des avions , au décollage , Ã l'atterrissage et dans le ciel.</div>
                </div>
            </div>
            <p className='text-justify mt-10'>
            Ces missions englobent l'ingénierie aéroportuaire , le contrôle de la circulation aérienne , la gestion de l'espace aérien du pays , la gestion des informations en vol et d'alerte , les recherches et sauvetages en cas d'accidents d'avion la lutte contre l'incendie , les técommunications et la météorologie aéronautiques , ainsi que le balisage des routes aériennes et des pistes d'aviation. Ces missions comprennent en outre la formation aéronautique. 
            </p>
       </Section>
    </Container>
  )
}

export default page