import Container from './container'
import cn from 'classnames'
import { CMS_NAME, EXAMPLE_PATH } from '../lib/constants'
import '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>{`${CMS_NAME} welcomes Pastor David Braneky`}</>
          )}
        </div>
      </Container>
    </div>
  )
}
