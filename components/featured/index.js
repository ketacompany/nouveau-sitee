import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects.module.css'
export default function Featured({ data }) {
  const btn = {
    live: 'Visit live',
    youtube: 'Watch on Youtube',
    github: 'View on Github',
  }
  return (
    <section className={styles.featured}>
      <p className={styles.newRelease}>New Release</p>
      <h3 className="header">Featured</h3>
      <div className={styles.featuredWrapper}>
        <div className={styles.featuredLeft}>
          {data.embed ? (
            <iframe
              width="100%"
              height="100%"
              src={data.embed}
              title={data.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={data.imgsrc}
              alt={data.name}
              width={800}
              height={480}
              layout="responsive"
              placeholder="blur"
              blurDataURL="/assets/placeholder.webp"
            />
          )}
        </div>
        <div className={styles.featuredRight}>
          <p className={styles.featuredName}>{data.name}</p>
          <p className={styles.featuredInfo}>{data.info}</p>
          <div className={styles.btnWrapper}>
            <Link href={`/products/${data.id}`}>
              <a className={styles.featuredBtn}>View</a>
            </Link>
            {data.links.map((item, i) => (
              <a
                key={i}
                className={styles[item.name]}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn[item.name]}
              </a>
            ))}
          </div>

          <ul className={styles.list}>
            {data.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
