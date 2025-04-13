import {Html,useProgress} from '@react-three/drei'

const CanvasLoader = () => {
    const {progress} = useProgress();
    return (
        <Html
        as="div"
        center
        style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}
        >
        <span className="canvs-loader" />
            <p style={{color: 'f1f1f1',fontSize:14 ,fontWeight: 800,marginTop: 40}}>
                {progress!==0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
}
export default CanvasLoader
