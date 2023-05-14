import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
      {type &&(
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images7.alphacoders.com/739/739029.jpg" alt="" />
      <div className="info">
        <img src="https://www.transparentpng.com/thumb/transformers-logo/GImFNF-transformers-text-logo-clipart-png-file.png" alt="" />
        <span className="desc">Transformers is a 2007 American science fiction action film based on the franchise of the same name. The film, which combines computer animation with live-action filming, was directed by Michael Bay, with Steven Spielberg serving as executive producer.</span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}