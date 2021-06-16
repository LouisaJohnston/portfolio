export default function ImageSlide({ url }) {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize:'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="image-slide" style={ styles }></div>
    )
}