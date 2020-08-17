import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Layout } from "../src/components/ui/Layout"
import { VideoInfo } from "../src/@types/models"
import { API_URL } from "../src/constants/env"
import { useMemo, useEffect, useState } from "react"

async function getRandomVideo(): Promise<VideoInfo> {
  const url = new URL("/random", API_URL)
  const res = await fetch(url.href)

  const data = await res.json()
  if (!data.data) throw new Error("Unable to find video")

  return data.data
}

export default function Home() {
  const [randomVideo, setRandomVideo] = useState<VideoInfo | undefined>()
  const [randomVideoError, setRandomVideoError] = useState<string>("")
  const [randomVideoLoading, setRandomVideoLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setRandomVideoLoading(true)

      try {
        const data = await getRandomVideo()

        setRandomVideo(data)
        setRandomVideoError("")
      } catch (err) {
        setRandomVideo(undefined)
        setRandomVideoError(err.message)
      }

      setRandomVideoLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Vapor Atlas</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <div className="mx-auto">
          {!randomVideoLoading && (
            <div>
              <div className="mx-auto table">
                <p className="text-lg font-bold">
                  {randomVideo ? randomVideo.title : ""}
                </p>
              </div>
              <div className="mb-8">
                <p className="error">
                  {randomVideoError ? randomVideoError : ""}
                </p>
              </div>
              {randomVideo && (
                <div className="w-128 mx-auto h-128 max-h-full">
                  <iframe
                    className="w-full h-full rounded-md shadow"
                    src={`https://www.youtube.com/embed/${randomVideo.videoId}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
              )}
            </div>
          )}
          {randomVideoLoading && (
            <div className="mx-auto table">
              <p className="">
                Just a moment. Waking up the server...
              </p>
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}
