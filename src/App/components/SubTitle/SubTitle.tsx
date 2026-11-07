//Componente de subtitulo pesonalizado.
export default function SubTitle(props: { title: string }) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8, flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
        <div style={{ width: '10rem', padding: 5, backgroundColor: '#3372fb', borderRadius: '8px 0px 8px 0px' }}>
        </div>
    </div>
}