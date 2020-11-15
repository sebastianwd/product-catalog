function useSSRQuery<T extends (...args: any[]) => any>(
  useCallback: T,
  ...args: Parameters<T>
): ReturnType<T> {
  const response = useCallback(...args)

  // If not production and not server, crash the application
  // to alert the dev that SSR is not working
  if (process.env.NODE_ENV !== 'production') {
    const isServer = typeof window === 'undefined'
    if (isServer && !response.data) {
      throw new Error(
        `SSR not functioning properly\n\n${JSON.stringify(
          { hookName: useCallback.name, args },
          null,
          2
        )}\n`
      )
    }
  }

  return response
}

export default useSSRQuery
