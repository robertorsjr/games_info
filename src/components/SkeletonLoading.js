import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 30px auto;
    width: 70%;
    height: 250px;
    background-color: #161618;
`

const SkeletonImage = styled.div`
    width: 260px;
    height: 210px;
    background-color: #1E2127;
    margin-left: 20px;
`

const Column = styled.div``;

const SkeletonItem = styled.div`
    height: 30px;
    width: ${({width}) => width}px;
    background-color: #1E2127;
    margin: 20px;
`

function SkeletonLoading({ itemSize }) {

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

export default SkeletonLoading;