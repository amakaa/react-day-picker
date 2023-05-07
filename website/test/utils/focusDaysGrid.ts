import { user } from '@site/test/user';
import { fireEvent } from '@testing-library/dom';
import { act } from '@testing-library/react';

import { getFocusedElement } from 'react-day-picker/test/selectors';

export async function focusDaysGrid() {
  // Make sure nothing is focused
  await act(() => fireEvent.blur(getFocusedElement()));
  // By pressing tab 3 times
  await act(() => user.tab());
  await act(() => user.tab());
  await act(() => user.tab());
}