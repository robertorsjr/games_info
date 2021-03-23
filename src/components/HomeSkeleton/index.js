import React from 'react';
import { Column, SkeletonImage, Wrapper, SkeletonItem } from './styles'

function HomeSkeleton({ itemSize }) {

  const size = new Array(itemSize || 5).fill(1)

  return (
    <>
      {
        size.map((el, index) => (
          <Wrapper key={index}>
              <SkeletonImage />
              <Column>
                  <SkeletonItem width={300} />
                  <SkeletonItem width={350} />
                  <SkeletonItem width={200} />
                  <SkeletonItem width={100} />
              </Column>
          </Wrapper>
        ))
      }
    </>
  );
}

export default HomeSkeleton;