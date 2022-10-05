import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ExternalLink } from '../../../../components/ExternalLink'

import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture
        src="https://s3-alpha-sig.figma.com/img/c460/226f/8a0e7a6ab75fc2eabd9a0a9ae72f8ea0?Expires=1665964800&Signature=FzVv2CVODZI-68yXe7bhlIdNPc5h9fa0XLwkXfCAr8KbEPodrXxjYb8l-G1YyytpuVZmsvePXt6CMCWJLIKw85CYleCYIYk85nw3HIwvUo~lGPKEHCpAKmc97foPQLrdpbLC4HOjY52b48r9Rxv10eiI6BwzJSSIvrEQL56ZdCifcSM-h-yPt7NJhIFw8nET6TAKOlcYfQZhn72nfvySjoB2N7CALuqN7WWYgZ2IHqKVZYv6xqodvRQPUs-UxTeKxGEe-bB4LrYkiQCzScFRuVgvl89qYQZU9tiQiqGpMw9YCX~VYfUXG5hBtaoJznBrVbldvqRCQ8puac6hGEDf6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />

      <ProfileDetails>
        <header>
          <h1>Cameron Williamson</h1>

          <ExternalLink text="Github" href="#" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
