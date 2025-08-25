'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setError, setLoading } from '@/redux/features/properties-slice'
import LoadingSpinner from '@/components/loading-spinner/loading-spinner';
import { RootState } from '@/redux/store';
  
  const SpecificProperties = (params: any) => {
  const dispatch = useAppDispatch();
  const specificCrypto = useAppSelector((state: RootState) => state.properties.specificProperties);
  const loading = useAppSelector((state: RootState) => state.properties.loading);
  const error = useAppSelector((state: RootState) => state.properties.error);

  return (
    <>

    </>
  );

};

export default SpecificProperties;