import type { MockupKind } from '@/types/content';

const BAR_HEIGHTS = [35, 60, 45, 80, 55, 95];
const ROW_COUNT = 4;

/** Tiny wireframe previews shown inside each project card. */
export default function Mockup({ kind }: { kind: MockupKind }) {
  return (
    <div className='mk' aria-hidden='true'>
      <div className='dots'>
        <i />
        <i />
        <i />
      </div>

      {kind === 'landing' && (
        <div className='bd'>
          <div className='b1' />
          <div className='g3'>
            <i />
            <i />
            <i />
          </div>
        </div>
      )}

      {kind === 'dashboard' && (
        <div className='bd dash'>
          <div className='sd' />
          <div className='mn'>
            <div className='kp'>
              <i />
              <i />
              <i />
            </div>
            <div className='bars'>
              {BAR_HEIGHTS.map(height => (
                <i key={height} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {kind === 'mobile' && (
        <div className='bd'>
          {Array.from({ length: ROW_COUNT }, (_, index) => (
            <div className='rw' key={index}>
              <b />
              <span />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
